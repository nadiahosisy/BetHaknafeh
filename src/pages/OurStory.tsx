import { motion, AnimatePresence } from "framer-motion";

const OurStory = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="our-story-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300"
      >
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/1a40e50f-e703-41dd-8021-4e0a7ef99a21.png"
              alt="Traditional Knafeh setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 font-knafeh1">
                הסיפור שלנו
              </h1>

              <p className="text-xl md:text-3xl font-classicArabic">
                מסורת של טעמים וניחוחות
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 max-w-xl mx-auto text-center"
            >
              <p className="text-4xl md:text-4xl font-bold text-gradient font-classicArabic">
                בית הכנאפה נולד מתוך אהבה אמיתית למסורת, לטעמים הייחודיים
                ולרגעים הקטנים של שמחה.
              </p>
              <p className="text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed">
                המקום נפתח לראשונה בשנת 2017, כשזוג האחים אמל ומנסור ממשפחת
                מנסור החליטו להגשים חלום ישן ולפתוח את המקום ביחד. אך עם התפרצות
                הקורונה, נאלצו לסגור את דלתותיהם ולהקדיש את זמנם למשפחה.
              </p>
              <p className="text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed">
                הסיפור קיבל תפנית מרגשת כאשר טלאל מנסור, בנו של מנסור, חייל
                שסיים את שירותו הצבאי בחיל האוויר, החליט להמשיך את מורשת אביו
                ודודו. טלאל, שגדל במקום ונסחף באהבתו לכנאפה ולתשוקה שבהכנתה,
                החליט להחיות מחדש את החלום הישן. מתוך תשוקה לקינוחים, לאווירה
                האותנטית ולחיבור עם אנשים, טלאל יצר בית חדש לכנאפה – מקום שמעניק
                לא רק טעם בלתי נשכח, אלא גם חוויה של חום ומשפחתיות, ובעיקר הגשמה
                עצמית.
              </p>
              <p className="text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed">
                ב-24/11/2024, לאחר תחילת המלחמה, נפתח בית הכנאפה מחדש כסמל
                לתקווה, לעמידה חזקה וליכולת להתחיל מחדש גם בזמנים הקשים ביותר.
                המקום מהווה הוכחה שחלומות, תשוקה ואמונה יכולים להתגבר על כל
                מכשול.
              </p>
              <p className="text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed">
                בית הכנאפה הוא לא רק בית לקינוחים מזרח תיכוניים – הוא מקום שמספר
                סיפור על נחישות, על אהבה לאנשים, ועל הרצון להעניק רגעים של
                מתיקות, שמחה ושלווה גם בימים סוערים.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden aspect-video"
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OurStory;
