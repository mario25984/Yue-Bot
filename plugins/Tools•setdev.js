let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('✐ Por favor, proporciona un dev para el bot.\nEjemplo: setdev Yue-Bot');
  const texto2bot = '© ⍴᥆ᥕᥱrᥱძ: '
  global.textbot = `${texto2bot + text}`;
  
  m.reply(`✐ El nombre del bot ha sido cambiado a: ${global.dev}`);
};

handler.help = ['setdev'];
handler.tags = ['tools'];
handler.command = ['setdev'];
handler.owner = false;

export default handler;