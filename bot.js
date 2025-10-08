const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'noxusland.id.vn',  // IP server
  port: 26200,               // Cổng server
  username: 'SUNOMCzzz',     // Tên tài khoản
})

bot.once('spawn', () => {
  console.log('✅ Bot đã vào server NoxusLand, chuẩn bị login...')
  const pwd = process.env.MCBOT_PASSWORD
  if (pwd) {
    setTimeout(() => {
      bot.chat(`/login ${pwd}`)
      console.log(`💬 Đã gửi lệnh /login ${pwd}`)
    }, 3000)
  } else {
    console.log('⚠️ Không có mật khẩu, bot chỉ đứng yên.')
  }
})

bot.on('kicked', console.log)
bot.on('error', console.log)

bot.on('end', () => {
  console.log('⚠️ Mất kết nối, đang thử vào lại...')
  setTimeout(() => process.exit(1), 5000)
})
