/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) throw conn.reply(m.chat, `✐ *Formato incorrecto*\n*Ejemplo:*\n\n${usedPrefix + command}  TV Pantalla plana`, m);
let res = await mercado(text);
let libre = '`✐ M E R C A D O - L I B R E`\n\n';
const coin = 1;
for (let i = 0; i < limit && i < res.length; i++) {
let link = res[i].link.length > 30 ? res[i].link.substring(0, 30) + '...' : res[i].link;
libre += `*🜸 Nombre:* ${res[i].title}\n*🜸 Estado:* ${res[i].state}\n*🜸 Link:* ${res[i].link}\n`;
libre += '\n' + '••••••••••••••••••••••••' + '\n';
}
conn.reply(m.chat, libre, m)
} catch (error) {
}};
handler.help = ['mercadolibre <búsqueda>']
handler.tags = ['buscador']
handler.command = ['mercadolibre']
handler.coin = 1
handler.register = true
export default handler;

async function mercado(query) {
try {
const url = `https://listado.mercadolibre.com.pe/${query}`;
const response = await axios.get(url);
const html = response.data;
const $ = cheerio.load(html);
const results = $('.ui-search-layout__item').map((i, element) => {
const title = $(element).find('.ui-search-item__title').text();
const state = $(element).find('.ui-search-item__group__element').last().text().trim();
const link = $(element).find('a').attr('href');
return {
title,
state,
link
};
}).get();
return results;
} catch (error) {
}}
