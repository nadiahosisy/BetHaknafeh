import React, { useState, useRef } from "react";
import {
  Coffee,
  CakeSlice,
  Candy,
  Cookie,
  Glasses,
  IceCream,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItemCard from "@/components/MenuItemCard";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const categoryIcons: Record<string, LucideIcon> = {
    "שתייה חמה": Coffee,
    "שתייה קרה": Glasses,
    מתוקים: CakeSlice,
    גלידה: IceCream,
    כנאפה: Candy,
    בקלאווה: Cookie,
  };

  const menuData = {
    "שתייה חמה": [
      {
        name: "תה",
        description:
          "מים חמים עם נענע/ פרוסות לימון/ מקלות קינמון/ קמומיל/ ג'ינג'ר ולימון.",
        price: "10₪",
        image: "images/tea.png",
      },
      {
        name: "סיידר תפוחים",
        description:
          "סיידר תפוחים חם עם חתיכות תפוח טרי וקינמון – טבעי, מרגיע ומחמם לב.",
        price: "15₪",
        image: "images/appleCider.png",
      },
      // {
      //   name: "קנקן תה",
      //   description:
      //     "מים חמים עם נענע/פרוסות לימון/ מקלות קינמון. (ל-4 סועדים)",
      //   price: "30₪",
      //   image: "images/teapot.png",
      // },
      {
        name: "אספרסו",
        description: "אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך",
        price: "12₪",
        image: "images/esspresso.jpg",
      },
      {
        name: "מקיאטו",
        description: "אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך ומעל חלב חם מוקצף.",
        price: "12₪",
        image: "images/macchiato.png",
      },
      {
        name: "אפוגטו",
        description:
          "כדור גלידה לבחירתכם מוגש עם אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך.",
        price: "15₪",
        image: "images/affogato.png",
      },
      {
        name: "קפה שחור",
        description: "קפה שחור טחון במקום עם מים חמים.",
        price: "10₪",
        image: "images/blackCoffee.jpg",
      },
      {
        name: "אמריקנו",
        description:
          "אספרסו כפול קצר עם מים חמים/ קרים, מוגש לצד חלב חם/ קר לבחירתכם.",
        price: "15₪",
        image: "images/americano.jpg",
      },
      {
        name: "קפה הפוך",
        description:
          "קפה חם ועדין המבוסס על מנת אספרסו עם חלב חם מוקצף שמעניק לו מרקם חלק וקרמי.",
        price: "15₪",
        image: "images/cappuccino2.jpg",
      },
      {
        name: "קפה מוקה",
        description:
          "שכבת פרליני שוקולד חלב בתחתית הכוס, מעליהם מנת אספרסו עשירה, חלב מוקצף קטיפתי ומעטה קקאו עדין מעל – שילוב מושלם של מרקמים וטעמים בכל לגימה.",
        price: "18₪",
        image: "images/mocha.png",
      },
      {
        name: "לוטוס לאטה",
        description:
          "שכבת ממרח לוטוס עשיר בתחתית הכוס, מעליה מנת אספרסו וחלב חם מוקצף, עטופים בענן של קצפת מתוקה ומפוזרים פירורי לוטוס מעל – פינוק חורפי ממכר עם טעם קרמלי מושלם.",
        price: "18₪",
        image: "images/lotusLatte.png",
      },
      {
        name: "שוקו חם",
        description:
          "משקה מתוק ומחמם המבוסס על אבקת שוקו איכותית עם חלב חם מוקצף. ניתן להוסיף מרשמלו או קצפת לתוספת פינוק.",
        price: "15₪",
        image: "images/hotchocolate.png",
      },

      {
        name: "סחלב",
        description:
          "משקה חם, סמיך ומפנק המוכן מחלב חם מבושל. ניתן להוסיף תוספות קלאסיות של פיסטוק קצוץ, פירורי לוטוס, קינמון וקוקוס.",
        price: "20₪",
        image: "images/sahlab.png",
      },
    ],
    "שתייה קרה": [
      {
        name: "מילקשייק",
        description:
          "על בסיס גלידה עשירה בטעמים לבחירה (שוקולד בלגי, וניל קלאסי, תות, וניל-עוגיות, פיסטוק, לוטוס, וניל דובדבן, מסטיק) – מוגש עם קצפת מעל.",
        price: "25₪",
        image: "images/milkshake.png",
      },
      {
        name: "קפה קר",
        description:
          "אספרסו איכותי, מוגש עם חלב טרי, קרח ומעט מתיקות לבחירתכם. מוגש עם קצפת מעל.",
        price: "15₪",
        image: "images/icedcoffee.png",
      },
      {
        name: "שוקו קר",
        description:
          "משקה שוקו קר עשיר ומרענן, מוגש בכוס זכוכית גבוהה עם שכבת חלב מוקצף מעל, קרח קוביות ושכבה נדיבה של קקאו מפוזר מעל. ",
        price: "15₪",
        image: "images/icedchocolate.png",
      },
      {
        name: "שוקו-מוקה קר",
        description:
          "שילוב מושלם של אספרסו איכותי עם שוקו עשיר, חלב קר וקוביות קרח,  קצפת אוורירית ופיזור קקאו מעל – טעם עמוק ומרענן בכל לגימה.",
        price: "18₪",
        image: "images/icedmoka.png",
      },
      {
        name: "אייס וניל",
        description:
          "משקה קרמי ומפנק על בסיס וניל, קרח גרוס וחלב טרי – מוגש עם קצפת מעל.",
        price: "12₪",
        image: "images/icedvanilla.png",
      },
      {
        name: "אייס קפה",
        description:
          "משקה קרמי וממכר על בסיס קפה נמס איכותי, קרח גרוס וחלב טרי – מוגש עם קצפת מעל.",
        price: "12₪",
        image: "images/frozencoffe.png",
      },
      {
        name: "לימונענע גרוס",
        description:
          "שילוב מרענן של לימון חמצמץ ונענע טרייה עם קרח גרוס וסירופ מתקתק במידה הנכונה.",
        price: "12₪",
        image: "images/mintlemonade.png",
      },
      {
        name: "קנקן לימנענע גרוס",
        description:
          "קנקן גדול של משקה מרענן של לימון חמצמץ ונענע טרייה עם קרח גרוס וסירופ מתקתק במידה הנכונה.",
        price: "30₪",
        image: "images/mintlemonadejug.png",
      },
      {
        name: "תפוזים סחוט טבעי",
        description: "תפוזים טריים, נסחטים במקום למיץ טבעי, מתוק ומלא בריאות.",
        price: "15₪",
        image: "images/orangeJuice.png",
      },
      {
        name: "לימונדה קלאסית",
        description:
          "משקה לימונדה מרענן בטעם לימון מתקתק, מוכן במיוחד לרגעים של פינוק ורעננות.",
        price: "8₪",
        image: "images/lemonade.png",
      },
      {
        name: "קנקן לימונדה קלאסית",
        description:
          "קנקן גדול של משקה לימונדה מרענן בטעם לימון מתקתק, מוכן במיוחד לרגעים של פינוק ורעננות.",
        price: "20₪",
        image: "images/lemonadejug.png",
      },
      {
        name: "ברד ענבים",
        description: "",
        price: "12₪",
        image: "images/grapeslush.jpg",
      },
      {
        name: "ברד פסיפלורה",
        description: "",
        price: "12₪",
        image: "images/passionslush.jpg",
      },
      {
        name: "מים מינרליים",
        description: "",
        price: "10₪",
        image: "images/water.jpg",
      },
      {
        name: "ענבים",
        description: "",
        price: "10₪",
        image: "images/grapejuice.jpg",
      },
      {
        name: "תות בננה",
        description: "",
        price: "10₪",
        image: "images/strawberryBananaJuice.jpg",
      },
      {
        name: "XL",
        description: "",
        price: "10₪",
        image: "images/energydrink.jpg",
      },
      {
        name: "XLten",
        description: "",
        price: "10₪",
        image: "images/energydrinkten.jpg",
      },
      { name: "סודה", description: "", price: "10₪", image: "images/soda.jpg" },
      {
        name: "פאנטה",
        description: "",
        price: "10₪",
        image: "images/fanta.jpg",
      },
      {
        name: "ספרייט",
        description: "",
        price: "10₪",
        image: "images/sprite.jpg",
      },
      {
        name: "ספרייט זירו",
        description: "",
        price: "10₪",
        image: "images/zerosprite.jpg",
      },
      {
        name: "קוקה קולה",
        description: "",
        price: "10₪",
        image: "images/cola.jpg",
      },
      {
        name: "קולה זירו",
        description: "",
        price: "10₪",
        image: "images/zerocolacola.jpg",
      },
    ],
    מתוקים: [
      {
        name: "וופל בלגי מפנק",
        description:
          "וופל בלגי טרי ופריך, מוגש עם רטבי שוקולד לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (שוקולד, וניל, תות ועוד) וקצפת עשירה בצד.",
        price: "45₪",
        image: "images/belgianwaffle.png",
      },
      {
        name: "פנקייק קלאסי",
        description:
          "זוג פנקייקים זהובים, אווריריים וטריים, מוגשים עם רטבים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (שוקולד, וניל, תות ועוד) וקצפת עשירה בצד.",
        price: "35₪",
        image: "images/pancakes.png",
      },
      {
        name: "פנקייק הולנדי",
        description:
          "כדורי פנקייק אווריריים וטריים. מגיעים עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס.",
        prices: { "10 יחידות": "22₪", "15 יחידות": "28₪" },
        image: "images/dutchpancakes.png",
      },
      {
        name: "קרפ צרפתי",
        description:
          "קרפ דקיק וזהוב, מוגש עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (וניל, שוקולד, תות ועוד) וקצפת מעל. ניתן להוסיף תוספות לבחירה: מקופלת, פירורי לוטוס או אוראו, בוטנים קלויים, דובדבן מסוכר ועוד.",
        price: "25₪",
        image: "images/crepe.png",
      },
      {
        name: "קרפ דובאי",
        description:
          "קרפ דקיק וזהוב, מוגש עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (וניל, שוקולד, תות ועוד) וקצפת מעל. ניתן להוסיף תוספות לבחירה: מקופלת, פירורי לוטוס או אוראו, בוטנים קלויים, דובדבן מסוכר ועוד.",
        price: "35₪",
        image: "images/dubaiCrepe.png",
      },
      {
        name: "כוס דובאי מפנקת",
        description:
          "קרפ דקיק וזהוב, מוגש עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (וניל, שוקולד, תות ועוד) וקצפת מעל. ניתן להוסיף תוספות לבחירה: מקופלת, פירורי לוטוס או אוראו, בוטנים קלויים, דובדבן מסוכר ועוד.",
        price: "35₪",
        image: "images/dubaiGlass.png",
      },
      {
        name: "שוקולד דובאי",
        description:
          "קרפ דקיק וזהוב, מוגש עם רטבים מפנקים לבחירה: נוטלה, שוקולד לבן, קינדר, פיסטוק, מייפל או לוטוס. כולל כדור גלידה לבחירה (וניל, שוקולד, תות ועוד) וקצפת מעל. ניתן להוסיף תוספות לבחירה: מקופלת, פירורי לוטוס או אוראו, בוטנים קלויים, דובדבן מסוכר ועוד.",
        price: "20₪",
        image: "images/dubaiChocolate.png",
      },
      {
        name: "צ'ורוס",
        description:
          "8 יחידות של צ'ורוס טריים, זהובים ופריכים, מצופים בסוכר וקינמון. מוגשים לצד קצפת עם רטבים לבחירה: קינדר, נוטלה או שוקולד לבן.",
        price: "45₪",
        image: "images/churros.png",
      },
      {
        name: "קוראסון גלידה",
        description:
          "קוראסון חמאתי טרי, פריך מבחוץ ורך מבפנים – מוגש חם, חצוי, וממולא בגלידת שמנת איכותית בטעמים לבחירה. שילוב מושלם של חום וקור, קרמיות ופריכות, שמתמוסס בפה בכל ביס. רטבים לבחירה: קינדר, נוטלה, קרם פיסטוק, לוטוס ו שוקולד לבן.",
        price: "45₪",
        image: "images/corrasiont.png",
      },
      {
        name: "אם עלי",
        description:
          "קוביות קוראסון חמאה זהובות, עטופות בריבת חלב ורוטב הבית, נאפות בתנור עד שהכול נמס ומתקרמל. מוגש חם, עם כדור גלידה נמסה מעל, פיסטוק טחון, קינמון ואגוזים – ביסים קטנים של עונג מתוק.",
        price: "50₪",
        image: "images/omAli.png",
      },
      {
        name: "עוגת טרלטשה",
        description:
          "עוגת ספוג רכה, ספוגה בשלוש סוגי חלב (רגיל, מרוכז וממותק), מצופה קצפת אוורירית ומתוקה, ומעל – רוטב קרמל ביתי שפשוט גונב את ההצגה. לחות מושלמת, מתיקות מדויקת – עוגה שפשוט נמסה בפה.",
        price: "50₪",
        image: "images/trilece.jpg",
      },
      {
        name: "עוגת לילות ביירות",
        description:
          "עוגת סולת נימוחה עם טעמים מזרחיים משכרים, ספוגה בסירופ סוכר עדין, מוגשת עם קצפת רכה מעל, פיסטוק גרוס ונגיעות של מי ורדים. קינוח קלאסי מהלב של ביירות – ביס אחד ואתם שם.",
        price: "50₪",
        image: "images/LayaliBairout.png",
      },
    ],
    גלידה: [
      {
        name: "גלידה טורקית",
        description:
          "גלידה טבעית ואותנטית על בסיס חלב עזים, במרקם עשיר וייחודי. מוגשת בשני טעמים: וניל קלאסי ופיסטוק עדין – שילוב מושלם של טעם ורעננות.",
        prices: { לחתיכה: "12₪", לאריזה: "45₪" },
        image: "images/turkishIceCream.png",
      },
      {
        name: "כדור גלידה",
        description:
          "כדור גלידה עשיר בטעמים לבחירה – וניל, שוקולד, וניל דובדבן, תות, תות סורבה, ריבת חלב, קינמון, אוראו ועוד הפתעות מתחלפות. הטעמים משתנים לפי היום – שאלו את המלצר מה מחכה לכם היום במקפיא.",
        price: "10₪",
        image: "images/iceCream.png",
      },
      {
        name: "כוס גלידה אמריקאית",
        description:
          "גלידה אמריקאית קלאסית בטעם וניל, רכה ואוורירית, מוגשת בכוס זהובה בעיצוב ייחודי. ניתן להוסיף מעל שלל תוספות מפנקות לבחירה: רטבי שוקולד, סירופ תות, מקופלת לבנה או חומה, אוראו טחון, לוטוס קראנצ'י, מרשמלו, סוכריות צבעוניות, בוטנים קלויים ועוד הפתעות מתוקות.",
        price: "15₪",
        image: "images/americanIceCream.png",
      },
      {
        name: "גביע גלידה אמריקאית",
        description: "",
        price: "10₪ לקילו",
        image: "images/harissa.jpg",
      },
      {
        name: "מארז גלידה משפחתי",
        description: "מארז חצי קילו של גלידה בטעמים לבחירתכם.",
        price: "45₪",
        image: "images/awame.jpg",
      },
    ],
    כנאפה: [
      {
        name: "כנאפת הבית",
        description:
          "כנאפה טרייה וחמה, עשויה במקום עם גבינה עשירה וסירופ סוכר מתקתק, במרקם מושלם.",
        prices: { אישית: "20₪", זוגית: "35₪", משפחתית: "70₪" },
        image: "images/knafeh.jpg",
      },
      {
        name: "שבלולית אדומה",
        description:
          "כנאפה טרייה וחמה, עשויה במקום עם גבינה עשירה וסירופ סוכר מתקתק, במרקם מושלם.",
        price: "40₪",
        image: "images/redknafeh.jpg",
      },
      {
        name: "כנאפה פיסטוק",
        description:
          "קינוח עשיר בשתי שכבות קדאיף פריכות וביניהן קרם פיסטוק עשיר ושוקולד לבן נמס. מעל, ציפוי נדיב של קרם פיסטוק ושוקולד לבן, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).",
        price: "45₪",
        image: "images/pistachioKnafeh.jpg",
      },
      {
        name: "כנאפה נוטלה",
        description:
          "קינוח עשיר בשתי שכבות קדאיף פריכות וביניהן שכבת נוטלה מפנקת ושוקולד לבן נמס. מעל, ציפוי נדיב של נוטלה ושוקולד לבן, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).",
        price: "45₪",
        image: "images/nutellaKnafeh.jpg",
      },
      {
        name: "כנאפה לוטוס",
        description:
          "קינוח עשיר בשתי שכבות קדאיף פריכות ובינ��הן שכבת קרם לוטוס מלטף. מעל, ציפוי נדיב של קרם לוטוס ופירורי לוטוס פריכים, מוגש עם קצפת וכדור גלידה לבחירה (וניל, שוקולד, תות ועוד).",
        price: "45₪",
        image: "images/lotusKnafeh.jpg",
      },
    ],
    בקלאווה: [
      {
        name: "קולאז' אגוזים וקינמון",
        description:
          "שכבות בצק פילו עדינות, ממולאות בתערובת עשירה של אגוזים טחונים עם נגיעות קינמון ארומטי, מצופות בסירופ סוכר מתקתק.",
        price: "120₪ לקילו",
        image: "images/baklawaNuts.jpg",
      },
      {
        name: "בורמה פיסטוק",
        description:
          "גליל בקלאווה עשוי משכבות דקות של בצק פילו פריך, ממולא בפיסטוק טחון טרי ומצופה בסירופ סוכר מתקתק.",
        price: "140₪ לקילו",
        image: "images/baklawaPistachio.jpg",
      },
      {
        name: "הריסה סולת",
        description:
          "עוגת סולת מסורתית, רכה ונימוחה, ספוגה בסירופ סוכר עדין ומעוטרת בשקד מעל.",
        price: "45₪ לקילו",
        image: "images/harissa.jpg",
      },
      {
        name: "עוואמה",
        description:
          "כדורי בצק מטוגנים, פריכים מבחוץ ורכים מבפנים, טבולים בסירופ מתוק – בדיוק כמו פעם.",
        price: "70₪ לקילו",
        image: "images/awame.jpg",
      },
    ],
  };

  const getCategoryDefaultImage = (category: string): string => {
    switch (category) {
      case "שתייה חמה":
        return "https://images.unsplash.com/photo-1509042239860-f0ca3bf6d889";
      case "שתייה קרה":
        return "https://images.unsplash.com/photo-1573750215158-97a608a0986d";
      case "מתוקים":
        return "https://images.unsplash.com/photo-1565299543923-37dd37887442";
      case "כנאפה":
        return "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9";
      case "בקלאווה":
        return "https://images.unsplash.com/photo-1514910367230-3be03a9a9528";
      default:
        return "https://images.unsplash.com/photo-1509042239860-f0ca3bf6d889";
    }
  };

  const menuItems = Object.entries(menuData).flatMap(([category, items]) =>
    items.map((item: any) => {
      const categoryIcon = categoryIcons[category] || Coffee;

      let imagePath = getCategoryDefaultImage(category);

      if (item.image) {
        if (item.image.includes("/")) {
          imagePath = item.image;
        } else {
          imagePath = item.image;
        }
      }

      return {
        src: imagePath,
        alt: item.name,
        title: item.name,
        category: category,
        price: item.price,
        sizes: item.prices,
        description: item.description,
        icon: categoryIcon,
      };
    })
  );

  const categories = Object.keys(menuData);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    console.log(
      "Category clicked:",
      category,
      "Previously selected:",
      selectedCategory
    );
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleAllCategoryClick = () => {
    console.log("All categories clicked");
    setSelectedCategory(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const renderMenuItems = () => {
    if (selectedCategory) {
      return (
        <AnimatePresence mode="sync">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            style={{ direction: "rtl" }}
          >
            {menuItems
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => (
                <motion.div
                  variants={itemVariants}
                  key={`${item.category}-${item.title}-${index}`}
                  className="menu-item h-full"
                  layout
                >
                  <MenuItemCard {...item} index={0} />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      );
    } else {
      return (
        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-4"
              >
                {categoryIcons[category] &&
                  React.createElement(categoryIcons[category], {
                    className: "h-7 w-7 md:h-6 md:w-6 text-primary",
                  })}
                <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-primary">
                  {category}
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                style={{ direction: "rtl" }}
              >
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <motion.div
                      variants={itemVariants}
                      key={`${item.category}-${item.title}-${index}`}
                      className="menu-item h-full"
                    >
                      <MenuItemCard {...item} index={0} />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <motion.div
      key="menu-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300 relative"
    >
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/1M8A9729.JPG"
            alt="Coffee Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl sm:text-4xl md:text-7xl font-bold mb-2 sm:mb-4 font-knafeh1">
              התפריט שלנו
            </h1>
            <p className="text-base sm:text-lg md:text-2xl">
              טעמים מסורתיים בכל ביס
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="relative mb-6 md:mb-10 text-center max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-2xl font-bold mb-4"
          >
            בחר קטגוריה
          </motion.h2>

          <div className="relative">
            <motion.div
              ref={categoryScrollRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 py-2"
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  onClick={handleAllCategoryClick}
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="whitespace-nowrap text-lg md:text-base mb-2"
                >
                  הכל
                </Button>
              </motion.div>

              {categories.map((category) => {
                const CategoryIcon = categoryIcons[category] || Coffee;

                return (
                  <motion.div key={category} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="button"
                      onClick={() => handleCategoryClick(category)}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      className="whitespace-nowrap text-lg md:text-base mb-2 inline-flex items-center gap-1 sm:gap-2"
                    >
                      <CategoryIcon className="h-5 w-5 md:h-4 md:w-4" />
                      <span>{category}</span>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">{renderMenuItems()}</div>
      </div>
    </motion.div>
  );
};

export default Menu;
