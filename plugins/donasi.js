let handler =  m => m.reply(`
╭─「 Donasi • E Money 」
│ • Dana [083839200413]
│ • Gopay [083839200413]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/xynozbotz
│ • Gopay [083839200413]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
