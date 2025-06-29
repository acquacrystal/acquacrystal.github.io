import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input.js";
import { Button } from "./ui/button.js";
import { Card, CardContent } from "./ui/card.js";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Mic, ThumbsUp, ThumbsDown } from "lucide-react";
import SweetPopup from "./sweetpopup.js"; // ✅ IMPORTED
import "../styles/faq.css";

const faqs = [
  {
    id: 1,
    question: "How long does a bathroom or kitchen upgrade take?",
    answer:
      "⏳ Most projects are done within 3–7 working days, depending on size. We work fast, clean, and with care.",
  },
  {
    id: 2,
    question: "Do you handle both supply and installation?",
    answer:
      "🔧 Yes — we supply top-quality sanitary wares and install them perfectly. One team, full service.",
  },
  {
    id: 3,
    question: "Do you help with plumbing repairs too?",
    answer:
      "🚰 Absolutely. We handle leaks, blockages, pipe work, and more — all with clean finishing.",
  },
  {
    id: 4,
    question: "What makes Acqua Crystal different?",
    answer:
      "💎 We mix beauty with reliability. Our work doesn’t just look good — it lasts, and we show up when others don’t.",
  },
  {
    id: 5,
    question: "Can you help me choose the right fittings?",
    answer:
      "🎨 Yes — we guide you on what matches your space, your style, and your budget. No stress.",
  },
  {
    id: 6,
    question: "How much do your services cost?",
    answer:
      "💰 We offer affordable luxury. Prices depend on your space and what you need — we’ll give you clear, honest quotes.",
  },
  {
    id: 7,
    question: "What’s the next step?",
    answer:
      "📞 Simple. Call or WhatsApp us — we’ll check your space, share ideas, and get started.",
  },
];

export default function UltimateFAQ() {
  const [search, setSearch] = useState("");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [feedback, setFeedback] = useState({});
  const [isListening, setIsListening] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ State for SweetPopup
  const navigate = useNavigate();

  let recognition;

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event) =>
        setSearch(event.results[0][0].transcript);
      recognition.onerror = () => setIsListening(false);
    }
  }, []);

  const startListening = () => {
    if (recognition) recognition.start();
    else alert("Your browser does not support speech recognition.");
  };

  const handleFeedback = (id, type) => {
    setFeedback((prev) => ({ ...prev, [id]: prev[id] === type ? null : type }));
  };

  const filteredFAQs = search
    ? faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
      )
    : faqs.slice(0, 4);

  const handleCTA = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      navigate("tel:+2349023703643"); // On mobile, trigger call
    } else {
      setIsPopupOpen(true); // On desktop, show SweetPopup
    }
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Got Questions? Let’s Clear Them Up.</h1>
      <p className="faq-description">
        At Acqua Crystal, we upgrade bathrooms and kitchens with beauty, care,
        and clean finishing — every time.
      </p>

      <div className="faq-search-container">
        <Input
          className="faq-search-input"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="faq-search-icon" />
        <Mic
          className={`faq-mic-icon ${isListening ? "listening" : ""}`}
          onClick={startListening}
        />
      </div>

      <AnimatePresence>
        {filteredFAQs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="faq-card">
              <CardContent
                className="faq-question"
                onClick={() =>
                  setSelectedFAQ(selectedFAQ === faq.id ? null : faq.id)
                }
              >
                <span>{faq.question}</span>
              </CardContent>
              {selectedFAQ === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                  <div className="faq-feedback">
                    <ThumbsUp
                      className={`feedback-icon ${
                        feedback[faq.id] === "like" ? "liked" : ""
                      }`}
                      onClick={() => handleFeedback(faq.id, "like")}
                    />
                    <ThumbsDown
                      className={`feedback-icon ${
                        feedback[faq.id] === "dislike" ? "disliked" : ""
                      }`}
                      onClick={() => handleFeedback(faq.id, "dislike")}
                    />
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      <Button className="faq-cta-button" onClick={handleCTA}>
        Still Need Help? Talk to Us!
      </Button>

      {/* ✅ SWEET POPUP RENDERED */}
      <SweetPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
