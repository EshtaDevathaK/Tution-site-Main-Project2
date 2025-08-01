import { MessageCircle, MapPin, Mail, Phone } from 'lucide-react'; // Icons

const FloatingButtons = () => {
  const phoneNumber = "+919384464782";
  const message = "Hi! I'm interested in learning more about your tuition services. Could you please provide more details?";
  const emailAddress = "learnwithsiran@gmail.com";


  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleLocationClick = () => {
    const address = encodeURIComponent('SIRAN Tuition Centre'); // Replace with actual address
    window.open(`https://www.google.com/maps?q=${address}`, '_blank'); // Open Google Maps
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (


    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-[9999] flex flex-col items-end">

      
      {/* 📍 Location Button */}
      <button
        onClick={handleLocationClick}
        className="mb-4 mt-5 relative flex items-center justify-center w-14 h-14 bg-red-500 text-white rounded-[8px] shadow-lg transition-transform hover:scale-10 group">
        <MapPin className="w-7 h-7" />
        <div className="absolute inset-0 rounded-[8px] bg-red-500 animate-ping opacity-15"></div>
        <Tooltip text="Find us on Google Maps" />
      </button>

 
      {/* ✉️ Email Button */}
      <button onClick={handleEmailClick} className="mb-5 mt-5 relative flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-[8px] shadow-lg transition-transform hover:scale-10 group">
        <Mail className="w-7 h-7" />
        <div className="absolute inset-0 rounded-[8px] bg-blue-500 animate-ping opacity-15"></div>
        <Tooltip text="Send us an Email" />
      </button>

      {/* 📞 Call Button */}
      <button onClick={handleCallClick} className="mb-4 mt-5 relative flex items-center justify-center w-14 h-14 bg-yellow-500 text-white rounded-[8px] shadow-lg transition-transform hover:scale-10 group">
        <Phone className="w-7 h-7" />
        <div className="absolute inset-0 rounded-[8px] bg-yellow-500 animate-ping opacity-15"></div>
        <Tooltip text="Call us now" />
      </button>

      {/* 💬 WhatsApp Button */}
      <button onClick={handleWhatsAppClick} className="mb-4  mt-5 relative flex items-center justify-center w-14 h-14 bg-[#25d366] text-white rounded-[8px] shadow-lg transition-transform hover:scale-10 group" >
        <MessageCircle className="w-7 h-7" />
        <div className="absolute inset-0 rounded-[8px] bg-[#25d366] animate-ping opacity-15"></div>
        <Tooltip text="Chat with us on WhatsApp" />
      </button>

    </div>


  );
};

const Tooltip = ({ text }: { text: string }) => (
  <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
    {text}
    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-foreground border-y-4 border-y-transparent"></div>
  </div>
);

export default FloatingButtons;
