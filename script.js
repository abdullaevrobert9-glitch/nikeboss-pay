const tg = window.Telegram.WebApp;
tg.expand(); 
document.documentElement.style.setProperty('--bg-color', tg.backgroundColor || '#1c1c1e');
function sendPaymentToBot() {
    tg.sendData(JSON.stringify({ action: "payment_check", method: "SBP_TBANK" }));
    tg.close();
}
