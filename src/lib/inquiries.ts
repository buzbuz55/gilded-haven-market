import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export type InquiryKind = "invest" | "join" | "consign" | "contact" | "career" | "buy";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(200),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().max(5000).optional(),
});

export const submitInquiry = async (
  kind: InquiryKind,
  input: { name: string; email: string; phone?: string; message?: string },
  details: Record<string, string> = {},
  resume?: File | null,
) => {
  const v = schema.parse(input);
  let resume_path: string | null = null;
  if (resume) {
    if (resume.size > 10 * 1024 * 1024) throw new Error("Resume must be under 10 MB");
    const ext = resume.name.split(".").pop()?.toLowerCase() ?? "pdf";
    if (!["pdf", "doc", "docx"].includes(ext)) throw new Error("Resume must be PDF or Word");
    resume_path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("resumes").upload(resume_path, resume);
    if (error) throw new Error("Couldn't upload your resume. Please try again.");
  }
  const { error } = await supabase.from("inquiries").insert({
    kind, name: v.name, email: v.email, phone: v.phone || null, message: v.message || null, details, resume_path,
  });
  if (error) throw new Error("Couldn't send your message. Please try again.");
};
