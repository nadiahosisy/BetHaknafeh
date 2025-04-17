import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openWaze = () => {
    window.open(
      "https://www.waze.com/he/live-map/directions/%D7%91%D7%99%D7%AA-%D7%94%D7%9B%D7%A0%D7%90%D7%A4%D7%94-%D7%90%D7%91%D7%90-%D7%97%D7%95%D7%A9%D7%99-352-%D7%A2%D7%A1%D7%A4%D7%99%D7%90?to=place.w.23003463.229706953.456125",
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/bethaknafeh_/", "_blank");
  };

  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/people/%D7%91%D7%99%D7%AA-%D7%94%D7%9B%D7%A0%D7%90%D7%A4%D7%94-%D7%A2%D7%A1%D7%A4%D7%99%D7%94/61554417312987/",
      "_blank"
    );
  };

  const openWhatsApp = () => {
    window.open("http://wa.me/972525380082", "_blank");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="location-page"
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
              src="/public/images/locationPhoto.jpg"
              alt="Traditional Middle Eastern restaurant exterior"
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
              <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">
                המיקום שלנו
              </h1>
              <p className="text-xl md:text-2xl">בואו לבקר אותנו</p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background dark:from-primary-dark to-transparent" />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6 glass-morphism p-8 rounded-xl"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground/80 dark:text-foreground/70">
                    המיקום שלנו
                  </h2>
                  <p className="text-foreground/70 dark:text-foreground/60">
                    אבא חושי 352
                    <br />
                    עיספיא, 3009000
                    <br />
                    ישראל
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground/80 dark:text-foreground/70">
                    שעות פתיחה
                  </h2>
                  <div className="space-y-2 text-foreground/70 dark:text-foreground/60">
                    <p>ראשון - שבת: 10:00 - 22:00</p>
                    <p>שלישי: סגור</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground/80 dark:text-foreground/70">
                    צור קשר
                  </h2>
                  <p className="text-foreground/70 dark:text-foreground/60">
                    טלפון: 04-886-4323
                    <br />
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={openInstagram}
                    className="hover:text-primary dark:hover:text-primary-light"
                  >
                    <Instagram className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={openFacebook}
                    className="hover:text-primary dark:hover:text-primary-light"
                  >
                    <Facebook className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={openWhatsApp}
                    className="hover:text-primary dark:hover:text-primary-light"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={openWaze}
                    className="hover:text-primary dark:hover:text-primary-light"
                  >
                    <MapPin className="w-6 h-6" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-[400px] glass-morphism rounded-xl overflow-hidden relative"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.380626027402!2d35.05574322488037!3d32.72908238643512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dafa83038bc09%3A0x3697be9c507f5a29!2z15HXmdeqINeU15vXoNeQ16TXlA!5e0!3m2!1siw!2sil!4v1744925101193!5m2!1siw!2sil"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Location;
