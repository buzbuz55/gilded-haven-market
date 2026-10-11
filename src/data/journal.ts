export type JournalCategory = "Jewelry" | "Diamonds" | "Watches" | "Art";

export interface JournalPost {
  slug: string;
  title: string;
  category: JournalCategory;
  excerpt: string;
  body: string[];
  readMinutes: number;
}

type Raw = [string, JournalCategory, string, string[]];

const raw: Raw[] = [
  // DIAMONDS
  ["The Hope Diamond: Legend, Curse and History", "Diamonds", "How a deep-blue stone from India travelled through French kings to the Smithsonian.", [
    "The Hope Diamond, a 45.52-carat deep-blue stone, is believed to have been cut from a larger diamond bought in India by the French merchant Jean-Baptiste Tavernier in the 1600s. It was sold to King Louis XIV and became known as the French Blue.",
    "Stolen during the French Revolution, the stone resurfaced in London in a recut form and took its name from the Hope banking family. Stories of a curse grew around it, helped along by jewelers who knew a good legend sells.",
    "In 1958 jeweler Harry Winston donated it to the Smithsonian Institution, famously sending it by ordinary registered mail. Today it is one of the most visited museum objects in the world.",
  ]],
  ["The Koh-i-Noor: The Mountain of Light", "Diamonds", "One of the most famous and disputed diamonds ever found.", [
    "The Koh-i-Noor, meaning 'Mountain of Light' in Persian, passed between Mughal, Persian, Afghan and Sikh rulers for centuries before coming to Britain in 1849.",
    "It was recut in 1852 to improve its sparkle, reducing it to about 105.6 carats. It now sits in the Crown of Queen Elizabeth The Queen Mother, displayed in the Tower of London.",
    "Several countries have claimed it, making it a powerful example of how a single gemstone can carry the weight of national history.",
  ]],
  ["The Cullinan: The Largest Gem-Quality Diamond Ever Found", "Diamonds", "A 3,106-carat rough found in South Africa in 1905.", [
    "Found at the Premier Mine in South Africa in 1905, the Cullinan weighed about 3,106 carats in the rough, the largest gem-quality diamond ever discovered.",
    "It was presented to King Edward VII and cut by the Asscher firm in Amsterdam into nine major stones and around 96 smaller ones. The largest, the Great Star of Africa, is set in the British Sovereign's Sceptre.",
    "The story is a reminder that a diamond's value is shaped as much by the cutter's skill as by nature.",
  ]],
  ["Understanding the 4Cs of Diamonds", "Diamonds", "Cut, color, clarity and carat — the language every buyer should know.", [
    "The 4Cs — cut, color, clarity and carat weight — were popularised by the Gemological Institute of America (GIA) in the mid-20th century as a universal way to describe diamond quality.",
    "Cut affects how a diamond returns light and is often considered the most important for beauty. Color is graded from D (colorless) downward, and clarity describes internal inclusions and surface blemishes.",
    "When you bring a diamond to us, our examination looks at all four, along with any certificate it carries, before we set a price.",
  ]],
  ["Why Old Mine Cut Diamonds Are Back in Fashion", "Diamonds", "Hand-cut stones from the 18th and 19th centuries have a soft, candle-lit glow.", [
    "Before modern cutting machines, diamonds were shaped by hand. Old mine cuts have a squarish outline, a high crown and a small table, designed to sparkle in candlelight.",
    "Because each was cut by eye, no two are alike. That individuality is exactly why collectors and modern brides now seek them out.",
    "Many old mine diamonds come from antique jewelry, so each carries a history of earlier owners.",
  ]],
  ["The Story of the Engagement Diamond", "Diamonds", "From an archduke's ring in 1477 to a modern tradition.", [
    "One of the earliest recorded diamond engagement rings was given by Archduke Maximilian of Austria to Mary of Burgundy in 1477.",
    "Diamond engagement rings became widespread in the 20th century, helped by advertising campaigns such as the famous 'A Diamond Is Forever' slogan from 1947.",
    "Today many couples choose vintage or pre-owned rings, valuing both their beauty and the stories they carry.",
  ]],
  ["Colored Diamonds: Pinks, Blues and Yellows", "Diamonds", "Why a trace of nitrogen or boron can make a diamond priceless.", [
    "Most diamonds are near-colorless, but traces of other elements or changes in crystal structure create color. Nitrogen can produce yellow, boron produces blue, and pink is thought to come from structural distortion.",
    "Natural fancy colored diamonds are rare, and the most intense examples have set auction records.",
    "Any colored diamond should be checked by a laboratory to confirm whether the color is natural or treated.",
  ]],
  ["Lab-Grown vs Natural Diamonds: What Changes the Value", "Diamonds", "They look alike, but resale stories differ.", [
    "Lab-grown diamonds have the same chemical makeup as natural diamonds and can only be told apart with specialist equipment.",
    "Their prices have fallen as production has grown, which affects resale value. Natural diamonds, especially older or certified stones, tend to hold value differently.",
    "Our experts test every diamond brought in for consignment so buyers know exactly what they are getting.",
  ]],

  // JEWELRY
  ["The Hidden History of Victorian Mourning Jewelry", "Jewelry", "Jet, enamel and woven hair — how grief became wearable.", [
    "After Prince Albert died in 1861, Queen Victoria wore mourning for the rest of her life, and mourning jewelry became widely fashionable in Britain.",
    "Pieces were made from Whitby jet, black enamel and even the woven hair of the departed, often inscribed 'In Memory Of'.",
    "Today these pieces are collected for their craftsmanship and the very personal stories they hold.",
  ]],
  ["Art Nouveau Jewelry: Nature in Gold and Enamel", "Jewelry", "Dragonflies, orchids and women with flowing hair.", [
    "Around 1890 to 1910, Art Nouveau designers turned away from heavy diamonds toward flowing lines inspired by nature.",
    "René Lalique was among the most celebrated, using enamel, horn and glass alongside gold to create insects, flowers and mythical figures.",
    "Signed Art Nouveau pieces are highly prized, and condition of the delicate enamel is key to value.",
  ]],
  ["Art Deco Jewelry: Geometry and Glamour", "Jewelry", "The bold style of the 1920s and 1930s.", [
    "Art Deco jewelry is known for strong geometric shapes, platinum settings and contrasting stones like diamonds with onyx, emerald or sapphire.",
    "Houses such as Cartier and Van Cleef & Arpels created some of the era's defining pieces.",
    "Original Deco jewelry remains one of the most sought-after categories at auction.",
  ]],
  ["Georgian Jewelry: The Rarest Antique Pieces", "Jewelry", "Jewels from 1714 to 1837 that survived against the odds.", [
    "Georgian jewelry was handmade, often with foil-backed stones in closed settings to boost their color and sparkle.",
    "Few pieces survive, because many were taken apart so the gold and stones could be reused.",
    "Because it is so rare, authentic Georgian jewelry can command strong prices from collectors.",
  ]],
  ["Cartier's Panthère: The Story of an Icon", "Jewelry", "How a big cat became a jewelry legend.", [
    "The panther first appeared in Cartier designs in 1914. Jeanne Toussaint, Cartier's creative director, made it a signature motif.",
    "In 1948 Cartier created a famous panther brooch on a large cabochon emerald for the Duchess of Windsor, followed by a sapphire version.",
    "Panthère pieces remain some of the most recognisable luxury jewelry in the world.",
  ]],
  ["Van Cleef & Arpels and the Mystery Setting", "Jewelry", "Stones set with no visible metal.", [
    "Van Cleef & Arpels patented its Mystery Set technique in 1933. Rubies or sapphires are grooved and slid onto fine gold rails so no prongs show.",
    "A single piece can take hundreds of hours, and only a few are made each year.",
    "Mystery Set jewels are among the most technically impressive pieces a collector can own.",
  ]],
  ["Tiffany's Yellow Diamond", "Jewelry", "A 128-carat stone worn by very few people.", [
    "The Tiffany Diamond was found in South Africa in 1877 and cut into a 128.54-carat cushion-shaped yellow diamond.",
    "It has been worn publicly by only a handful of people, including Audrey Hepburn in publicity photos for Breakfast at Tiffany's.",
    "It shows how one stone can define the reputation of an entire jewelry house.",
  ]],
  ["Pearls: From Ancient Treasure to Modern Classic", "Jewelry", "Why natural pearls were once worth more than diamonds.", [
    "Before cultured pearls, natural pearls were extremely rare and highly valued.",
    "In the early 1900s Kokichi Mikimoto helped develop commercial pearl culturing in Japan, making pearls available to many more people.",
    "Natural pearls still command large premiums and should be confirmed by laboratory X-ray testing.",
  ]],
  ["The Language of Victorian Sentimental Jewelry", "Jewelry", "Rings that spell secret messages.", [
    "Victorians loved hidden meaning. 'Regard' rings spelled words with the first letter of each gemstone: Ruby, Emerald, Garnet, Amethyst, Ruby, Diamond.",
    "Snakes symbolised eternal love, and forget-me-nots meant remembrance.",
    "Learning this language makes antique jewelry far more personal to wear.",
  ]],
  ["Signet Rings: A Family Seal on Your Finger", "Jewelry", "From sealing letters to modern heirlooms.", [
    "Signet rings were used for centuries to press a family crest into wax to seal letters and documents.",
    "Many were passed down through generations, worn on the little finger.",
    "Antique signet rings with clear engravings are popular with collectors and people building their own family traditions.",
  ]],
  ["Emeralds: Why Inclusions Are Accepted", "Jewelry", "The 'jardin' inside every emerald.", [
    "Almost all emeralds contain inclusions, which the French call 'jardin', meaning garden.",
    "Colombia has long been famous for fine emeralds. Most emeralds are treated with oil or resin to improve clarity, which is standard in the trade.",
    "A laboratory report tells buyers how much treatment a stone has had, which affects value.",
  ]],
  ["Sapphires: Not Only Blue", "Jewelry", "From Kashmir cornflower to padparadscha pink-orange.", [
    "Sapphires come in nearly every color except red, which is called ruby.",
    "Kashmir sapphires, mined mostly in the late 1800s, are prized for their velvety blue. Padparadscha sapphires show a rare pink-orange.",
    "Origin and heat treatment both have a big effect on price, so certification matters.",
  ]],
  ["Rubies: The King of Gems", "Jewelry", "Burmese 'pigeon's blood' and why it is so prized.", [
    "In ancient India, ruby was called ratnaraj, the 'king of gems'.",
    "The most valued rubies have a deep red known as 'pigeon's blood', traditionally linked with Myanmar (Burma).",
    "Fine untreated rubies over a few carats are rarer than diamonds of the same size.",
  ]],
  ["Estate Jewelry: Buying a Piece With a Past", "Jewelry", "Why pre-owned jewelry is a smart choice.", [
    "Estate jewelry simply means previously owned. It can be antique, vintage or recent.",
    "Buyers often get better craftsmanship for the money, and pieces have character that new jewelry lacks.",
    "Every piece we sell is examined and authenticated before it is listed.",
  ]],
  ["How to Tell Real Gold From Plated", "Jewelry", "Hallmarks, weight and what the experts check.", [
    "Most real gold is stamped with a purity mark, such as 14K, 18K, 585 or 750.",
    "Plated jewelry may show wear where the base metal comes through, often at edges and clasps.",
    "Stamps can be faked, so professional testing is the only reliable way to know. We test every piece brought to us.",
  ]],
  ["Caring for Antique Jewelry", "Jewelry", "Simple steps that protect value.", [
    "Avoid ultrasonic cleaners for antique pieces, pearls, emeralds and opals. Warm water, mild soap and a soft brush are usually safest.",
    "Store pieces separately so harder stones don't scratch softer ones.",
    "Have prongs checked yearly. A lost stone can greatly reduce a piece's value.",
  ]],
  ["What Happens When You Consign Jewelry With Us", "Jewelry", "From examination to payout, step by step.", [
    "You bring your piece to us. Our experts examine it, test the metal and stones, and check any paperwork.",
    "We give you a price and, once you agree, photograph and list it for sale to our collectors.",
    "When it sells, we keep a 10% commission and you receive the remaining 90%. There are no fees up front.",
  ]],
  ["Why Provenance Adds Value to Jewelry", "Jewelry", "Receipts, boxes and stories matter.", [
    "Provenance is the documented history of who owned a piece and where it came from.",
    "Original boxes, receipts, certificates and photos of a piece being worn can all increase what buyers will pay.",
    "If you consign with us, bring any paperwork you have. It helps us set the best price.",
  ]],

  // WATCHES
  ["The Rolex Submariner: The Story of a Dive Watch", "Watches", "Introduced in 1953 and still a benchmark.", [
    "Rolex introduced the Submariner in 1953 as a tool watch for divers, water resistant to 100 meters at launch.",
    "It appeared on screen with James Bond in the early films, which helped make it a style icon.",
    "Vintage references with original parts are especially sought after by collectors.",
  ]],
  ["The Omega Speedmaster: The Moonwatch", "Watches", "Worn on the Moon in 1969.", [
    "After testing by NASA, the Omega Speedmaster was qualified for crewed space missions in 1965.",
    "Buzz Aldrin wore one on the lunar surface during Apollo 11 in 1969, earning it the 'Moonwatch' name.",
    "Omega has kept the Speedmaster's look remarkably close to the original ever since.",
  ]],
  ["Patek Philippe: Why It's Called the Holy Grail", "Watches", "Complications, rarity and generations of owners.", [
    "Founded in Geneva in 1839, Patek Philippe is known for complicated movements and limited production.",
    "Its slogan says you never actually own a Patek Philippe; you merely look after it for the next generation.",
    "Patek watches regularly set records at auction.",
  ]],
  ["The Cartier Tank: Inspired by the Battlefield", "Watches", "A 1917 design still worn today.", [
    "Louis Cartier is said to have designed the Tank in 1917, inspired by the shape of military tanks seen from above.",
    "Its clean rectangular case has been worn by artists, film stars and royalty.",
    "The Tank shows how strong design can last more than a century.",
  ]],
  ["Audemars Piguet Royal Oak: The First Luxury Steel Sports Watch", "Watches", "Gérald Genta's bold 1972 design.", [
    "In 1972 Audemars Piguet launched the Royal Oak, designed by Gérald Genta, with an octagonal bezel and exposed screws.",
    "It was priced like a gold watch despite being made of steel, which shocked the industry at the time.",
    "Today it is one of the most desired watches in the world.",
  ]],
  ["Pocket Watches: The Original Luxury Timepiece", "Watches", "Before wristwatches, gentlemen carried time in their vest.", [
    "Pocket watches were the main personal timepiece from the 1600s until wristwatches became popular after World War I.",
    "Railroad-grade pocket watches had to meet strict accuracy standards to keep trains safe.",
    "Engraved cases and fine movements make antique pocket watches beautiful collector pieces.",
  ]],
  ["Why Original Parts Matter in Vintage Watches", "Watches", "A replaced dial can change the price dramatically.", [
    "Collectors value watches that keep their original dial, hands, bezel and movement.",
    "Over-polishing a case can soften sharp edges and reduce value.",
    "Before consigning a watch, avoid polishing or servicing it — let our experts assess it first.",
  ]],
  ["Box and Papers: Why They Matter When Selling a Watch", "Watches", "Small items, big difference.", [
    "'Full set' means a watch comes with its original box, warranty card and paperwork.",
    "These items help prove authenticity and history, and buyers often pay more for them.",
    "Bring everything you have when you visit us for an evaluation.",
  ]],
  ["How a Mechanical Watch Works", "Watches", "Springs, gears and a tiny beating heart.", [
    "A mechanical watch is powered by a wound mainspring. Its energy passes through gears to the escapement, which releases it in steady steps.",
    "The balance wheel swings back and forth several times a second, keeping time.",
    "Automatic watches wind themselves using a rotor that moves with your wrist.",
  ]],
  ["Watch Complications Explained", "Watches", "Chronographs, moon phases and perpetual calendars.", [
    "A complication is any function beyond showing hours, minutes and seconds.",
    "Common ones include the date, chronograph (stopwatch), moon phase and dual time zone. The perpetual calendar adjusts for month lengths and leap years.",
    "More complications usually mean more craftsmanship and higher value.",
  ]],
  ["Spotting a Fake Luxury Watch", "Watches", "Warning signs every buyer should know.", [
    "Common signs include poor printing on the dial, a light or hollow feel, and a seconds hand that ticks when it should sweep.",
    "Modern fakes can be very convincing, so checking the movement is often necessary.",
    "Every watch we consign is examined by specialists before it is listed.",
  ]],
  ["Women's Watches: A Brief History", "Watches", "The wristwatch began as a lady's jewel.", [
    "Early wristwatches in the 1800s were worn mainly by women, often as bracelets. Breguet made one for the Queen of Naples in the early 1800s.",
    "Men adopted wristwatches widely after World War I, when they proved practical in the field.",
    "Vintage ladies' cocktail watches set with diamonds are now enjoying renewed interest.",
  ]],

  // ART
  ["The Mona Lisa: Why It Became the World's Most Famous Painting", "Art", "The 1911 theft that made a legend.", [
    "Leonardo da Vinci painted the Mona Lisa in the early 1500s. It was admired, but not world famous, for centuries.",
    "In 1911 it was stolen from the Louvre by Vincenzo Peruggia. Newspapers worldwide covered the theft, and when it was recovered in 1913 it had become a global celebrity.",
    "The story shows how a painting's history can shape its value as much as the brushwork.",
  ]],
  ["Van Gogh's Sunflowers: A Gift for a Friend", "Art", "Paintings made to decorate a guest room.", [
    "Vincent van Gogh painted his Sunflowers series in Arles in 1888 and 1889, partly to decorate the room of his friend Paul Gauguin.",
    "Van Gogh sold very little in his lifetime. Today his works are among the most valuable in the world.",
    "His story inspires collectors to look closely at living artists.",
  ]],
  ["How Provenance Protects Art Buyers", "Art", "The paper trail behind a painting.", [
    "Provenance is a record of a painting's ownership from the artist to today.",
    "Good provenance helps confirm authenticity and makes sure a work was not stolen or looted.",
    "Every painting we list includes provenance and certificate details.",
  ]],
  ["Gold Leaf in Art: From Icons to Klimt", "Art", "A thousand years of shining surfaces.", [
    "Byzantine and medieval painters used gold leaf to suggest divine light in religious icons.",
    "Gustav Klimt revived gold in his 'Golden Phase', most famously in The Kiss (1907–1908).",
    "Gold leaf still gives contemporary works a warm glow that changes with the light.",
  ]],
  ["Sacred Art: Why Religious Imagery Still Moves Collectors", "Art", "Faith, story and symbolism on canvas.", [
    "For much of history, religious stories were the main subjects of painting, from Renaissance altarpieces to Islamic calligraphy.",
    "Modern artists continue the tradition, using biblical scenes, temples and sacred script to explore faith and history.",
    "Our collection includes contemporary sacred works, each with its own story.",
  ]],
  ["Islamic Calligraphy: Writing as Art", "Art", "When words become the image.", [
    "In Islamic art, calligraphy is among the most respected forms, used to write sacred text with great beauty.",
    "Styles such as Kufic and Thuluth have their own rules of proportion, developed over centuries.",
    "Framed calligraphy brings both artistry and meaning into a room.",
  ]],
  ["The Story of the Temple in Jerusalem in Art", "Art", "A subject painted for centuries.", [
    "The Temple in Jerusalem has been imagined by artists for centuries, from medieval manuscripts to modern paintings.",
    "Artists draw on historical descriptions to recreate its courts, gates and services.",
    "Contemporary works continue the tradition with new color and light.",
  ]],
  ["How to Choose Art for Your Home", "Art", "Size, light and the feeling you want.", [
    "Start with the feeling you want in a room: calm, energy, warmth or drama.",
    "As a rough guide, art above a sofa often looks best at around two-thirds the sofa's width.",
    "Try our Art Advisor to describe your room and get painting suggestions.",
  ]],
  ["Caring for Oil Paintings", "Art", "Light, humidity and handling.", [
    "Keep paintings out of direct sunlight, which can fade colors over time.",
    "Avoid hanging art above radiators or in bathrooms where humidity changes quickly.",
    "Never clean a painting with household products; use a professional conservator.",
  ]],
  ["The Art of Framing", "Art", "How a frame changes a painting.", [
    "Historically, frames were often designed as part of the artwork, especially for altarpieces.",
    "A good frame protects the painting and leads the eye inward.",
    "Gilded frames suit classical and sacred works, while thin frames suit modern pieces.",
  ]],
  ["Why Collect Living Artists", "Art", "Support today, heritage tomorrow.", [
    "Buying from living artists supports their work directly and lets you follow their careers.",
    "Many famous artists were once affordable, which is part of the excitement of collecting.",
    "Choose work you love first; value is a bonus.",
  ]],
  ["Certificates of Authenticity: What to Look For", "Art", "What a good certificate includes.", [
    "A certificate should name the artist, title, date, materials and dimensions, along with a signature.",
    "An image of the work and a unique number make the certificate harder to misuse.",
    "Keep certificates safe; they are part of the value when you resell.",
  ]],
  ["The Great Art Thefts That Changed Museums", "Art", "Heists that made history.", [
    "In 1990, thieves posing as police stole 13 works from the Isabella Stewart Gardner Museum in Boston, including a Vermeer. They have never been recovered.",
    "The empty frames still hang in the museum as a reminder.",
    "Thefts like these are why documented provenance is so important to buyers.",
  ]],
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const journalPosts: JournalPost[] = raw.map(([title, category, excerpt, body]) => ({
  slug: slugify(title),
  title,
  category,
  excerpt,
  body,
  readMinutes: Math.max(2, Math.round(body.join(" ").split(" ").length / 60)),
}));

export const journalCategories: JournalCategory[] = ["Jewelry", "Diamonds", "Watches", "Art"];
