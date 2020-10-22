//CMD login setup
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    for (var i = 0 ; i < 25; i++) {
        console.log(" ")
        if (i == 24) {
            readline.question(`Giriş Hesabı : `, (name) => {
            if (name.toLowerCase() == "self") {
            client.login(credentials.selftoken)
            }

            if (name.toLowerCase() == "bot") {
            client.login(credentials.token)        
            }

        readline.close()
            })

        }}


//Bot and commands Setup
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const credentials = require('./Config/credentials.json')
    const p = credentials.prefix
    const op = credentials.otherprefixes
    const fs = require('fs')
    const d = new Date()
    const dogum = "12/11/2018"
    const { Client, RichEmbed } = require('discord.js')

   
    //Dnd Spam
        function spamf() {
             spams.length = 0;
        }

    

    //Spam msgs array
    var spams = [
    ]

    //Rock Paper Scissors
    var rps = ["Rock","Paper","Scissors"]
    function rps() {
        return rps[Math.floor(Math.random()*rps.length)]
    }


//Client Active 
    client.on('ready', () => {
    client.user.setActivity('🔮', {type:"WATCHING"})
    client.user.setStatus("dnd")
    var hours = d.getHours()
    var minutes = d.getMinutes()
    hours = ( hours < 10 ? "0" : "" ) + hours
    minutes = ( minutes < 10 ? "0" : "" ) + minutes
    var login = `| Signed in as ${client.user.tag} (${hours}:${minutes}) |`
    let line = " "
    let column = ""
    
    for (var i = 0; i <= login.length+1; i++) {line+= "="} 
    for (var i = 0; i<= login.length+1;i++) {
        if (i==0) {
            column+="|"
        }
        column+=" "
        if(i==login.length+1) {
            column+="|"
        }
    } 
    for (var i = 0 ; i < 16; i++) {
        console.log(" ")
        if (i == 7) {
            
            console.log(line)
            console.log(column)
            console.log(column)
            console.log(`| Signed in as ${client.user.tag} (${hours}:${minutes}) |`);
            console.log(column)
            console.log(column)
            console.log(line)
        }}
    console.log("Copyright Fudayl Cavus")
    console.log("______________________")

    setInterval(spamf, 3000) //cleans spambox every 3s
    cOnline()
    setInterval(cOnline,600000) // checks your friends availability

    })

//No prefix no self answer commands
    client.on('message', msg => { 
    var args = msg.content.split(" ");
    var cmd = msg.content.toLowerCase()
    if(msg.author.id == client.user.id) return;


//Push Messages to spams   
    spams.push(args[0]);
    if(spams.length >= 5) {
        console.log("Rahatsız Etmeyindesin!!")
    }


//Set Dnd on spam under maintence
    if(spams.length >= 100) 
    {msg.reply(':robot:    Spam Yapma!!!')
    if(client.user.presence.status != "dnd") {
    msg.channel.send("``"+spams.length+"``"+" mesaj 3 saniyeden kısa sürede gönderildi rahatsız etmeyine alındı.");
    
    client.user.setStatus("dnd")}
    spams.length = 0; }

   
//Replies
    console.log("===============")
    console.log(msg.guild)
    if(cmd == 'ping') {msg.reply(':robot:  Pong!')}
    if(cmd == 'günaydın') {msg.reply(":robot:  sanada günaydın")}
    if(cmd == 'gunaydın') {msg.reply(":robot:  sanada günaydın")}
    if(cmd == 'selamun aleyküm') {msg.reply(":robot:  Aleykümselam")}
    if(cmd == 'selamunaleykum') {msg.reply(":robot:  Aleykümselam")}
    if(cmd == 'selamun aleykum') {msg.reply(":robot:  Aleykümselam")}
    if(cmd == 'selamunaleyküm' ) {msg.reply(":robot:  Aleykümselam")}
    if(cmd == 'sa') {msg.reply(":robot:  Aleykümselam");}
    if(cmd =="sich bewegen") {msg.reply(":robot:  Hareket Etmek")}
    if(cmd.includes('fudayl')) {

    
        var mchannel = msg
        var notifychannel = client.channels.get("516254514039488561")
        if (args[1]) {
            msg.channel.send("Merhaba ``"+msg.author.username+"``,")
            msg.channel.send("``Mesajını iletiyorum.``")
        } else {
            msg.channel.send("Merhaba ``"+msg.author.username+"``,")
            msg.channel.send("``Dur Çağırayım``");    
        }
        
        msg.channel.send("``` Özel Mesaj Gonderiliyor.. ```")
        .then(msg => msg.delete(2500));
        console.log(`${msg.author.username} sana "${msg.content}" dedi`)
        notifychannel.send(`${msg.author} ruft Fudayl.`, {tts: true})
        setTimeout(function(){msg.channel.send("``` Gonderildi. ```")},3000); 
    }    

    

    if (cmd=="b1mk") {
        msg.channel.send("B1 Mk Seslendiriliyor...");
        let VC = msg.member.voiceChannel;
        VC.join()
        .then(connection => { 
            const dispatcher = connection.playFile('D:/Works/ExDet-Selfbot/sounds/b1mk.mp3')
            dispatcher.on("end",()=> VC.leave())

        })
      }
        

    //Last String of no prefix no self answer commands
    });

    
//Admin commands with Prefix
    client.on('message', msg => {

    var args = msg.content.substring(p.length).split(" ");
    var cmd = args[0].toLowerCase()
    if(!msg.content.startsWith(p)) return;
    if(msg.author.id != client.user.id) return;


    //Embed Setup
        var thumbnail = client.user.avatarURL    
        var title_re = /title=\".*?\"/g
        var title_cmd = args.join(" ").match(title_re)
        if(title_cmd) {
        var title = title_cmd.join(" ").split(`"`)[1]
        } else {
            title = ``
        }

        
        var author_re = /author=\".*?\"/ig
        var author_cmd = args.join(" ").match(author_re)
        if(author_cmd) {
        var author = author_cmd.join(" ").split(`"`)[1]
        } else {
        author = ``
        }
        
        var color_re = /color=\".*?\"/ig
        var color_cmd = args.toString().match(color_re)
        if(color_cmd) {
        var color = color_cmd.join(" ").split(`"`)[1]
        if(0 < color < 16777215) {

        }
        
        else {
            msg.channel.send(`Color code must between 0-1677215`)
       
            return;
        }
        if(!color.startsWith(`#`)) {color = `#` + color}
    

    
        } else {
        color = ``
        }   


        var description_re = /description=\".*?\"/ig
        var description_cmd = args.join(" ").match(description_re)
        if(description_cmd) {
          var description = description_cmd.toString().split(`"`)[1]
        } else {
        description = ``
        }

        if(!title_cmd && !author_cmd && !description_cmd) {
        var command = args[0].length
        var thumbnail = ""
        var title = args.join(" ").substring(command+1)
        if(color_cmd) {      
        var title = args.join(" ").substring(command+1).replace(`${color_cmd}`,``)

        }
        }

    if(cmd == 'embed') {
        
    var embed = new RichEmbed()
    .setTitle(`${title}`)
    .setAuthor(`${author}`)
    .setColor(`${color}`)
    .setThumbnail(`${thumbnail}`)
    .setDescription(`${description}`)
    //       .setMessage()
    //       .setFooter()
    //        .url()
    client.user.lastMessage.delete()
    .catch(console.error)
    msg.channel.send(embed)
    .catch(console.error)
    return;
    }

    if(cmd == `ping`)
        {msg.channel.send("Pong!")
        return
    }


    if (cmd == "takimcagir") {
        if (!args[1]) {
        msg.delete()
        msg.channel.send("<@272443689190555648>, <@272444618711236612>, <@272445106538414091>, <@273134405143363584> You are waiting.... ")
        return
    }
    if (args[1]) {
        msg.delete()
        msg.channel.send(`<@272443689190555648>, <@272444618711236612>, <@272445106538414091>, <@273134405143363584> ${args.join(" ").substring(cmd.length+1)}`)
    }
    return
    }


    if (cmd == "sayac") {
        if (!args[1]) {
            msg.channel.send(`Eksik kullanım!!, ** ${p}sayac sure cins(dakika, saat, saniye)** `).then(msg.delete(100)) 
            return;
        }
        msgc = msg.channel
        if(msg.author.id) {
            msgs = msg.author.id
        }
        
        if (args[2] == "dakika") {
            var wtime = 60000 * args[1]
        }
        if (args[2] == "saniye") {
            var wtime = 1000 * args[1]
        }
        if (args[2] == "saat") {
            var wtime = 3600000 * args[1]
        }

        if (!args[2]) {
            msg.channel.send(`Saniye, dakika veya saat oldugunu belirtmediniz!!! ** ${p}sayac sure cins(dakika, saat, saniye)** `).then(msg.delete(100))
            return;
        }
        if(wtime) {
            msg.channel.send(`Süre ${args[1]} ${args[2]} sonrası için ayarlandı!!`).then(msg.delete(100))
        }
        setTimeout( () => { 
            msgc.send(`<@${msgs}>, Süre Doldu!!!`)
        },wtime)
        return}

        if (cmd="tkm") {

            function random(items) {
                return items[Math.floor(Math.random()*items.length)]
            }

            let Pick = random(rps)

            if (!args[1]) {
                msg.channel.send(Pick)
                return;
            }
            if (args[1].toLowerCase()=="taş") {
                msg.channel.send(Pick)
                if (Pick == "Taş") {
                    msg.channel.send("Berabere!")
                }
                if (Pick == "Makas") {
                    msg.channel.send("Kazandın!")
                }
                if (Pick == "Kağıt") {
                    msg.channel.send("Kaybettin!")
                }
            }

            if (args[1].toLowerCase()=="kağıt") {
                msg.channel.send(Pick)
                if (Pick == "Kağıt") {
                    msg.channel.send("Berabere!")
                }
                if (Pick == "Taş") {
                    msg.channel.send("Kazandın!")
                }
                if (Pick == "Makas") {
                    msg.channel.send("Kaybettin!")
                }
            }

            if (args[1].toLowerCase()=="makas") {
                msg.channel.send(Pick)
                if (Pick == "Makas") {
                    msg.channel.send("Berabere!")
                }
                if (Pick == "Kağıt") {
                    msg.channel.send("Kazandın!")
                }
                if (Pick == "Taş") {
                    msg.channel.send("Kaybettin!")
                }
            }

        }

    //Last String of Admin commands
    })


//Commands With Prefix

    client.on('message', msg =>{
    var args = msg.content.substring(p.length).split(" ");
    var cmd = args[0].toLowerCase()
    if(!msg.content.startsWith(p)) return;
    if(msg.author.id == client.user.id) return;

    if (cmd=="temizle") {   
        if (!args[1]) return msg.channel.send(`${p}temizle \`\`sayı\`\` `)
        if (isNaN(args[1])) return msg.channel.send("Geçerli bir sayı girin!")
        msg.delete()
        msg.channel.bulkDelete(args[1])

            .then(messages => {msg.channel.send(`** \`${messages.size}/${args[1]}\` mesaj başarıyla silindi** `)}).then(msg => msg.delete({timeout: 10000}))
            .catch(error => {
                    if(error == "DiscordAPIError: Only bots can use this endpoint") {
                        msg.channel.send("Sasiledece Botlar toplu mesaj bilir..") 
                        return} 
                msg.channel.send(`Error: ${error}`)}
            )
        
    }

//change and add sound track for specialized welcome message
    if (cmd.includes("f-online-")) {
        if (msg.member.voiceChannel) {
            let VC = msg.member.voiceChannel
            VC.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                if (msg.member.id == "396736394837622784") {
                    const dispatcher = connection.playFile('D:/Works/ExDet-Selfbot/sounds/umitfirst.wma');
                    dispatcher.on("end",()=> VC.leave())
                };
                if (msg.member.id == credentials.ExDetID) {
                    const dispatcher = connection.playFile('D:/Works/ExDet-Selfbot/sounds/dev.wma');
                    dispatcher.on("end",()=> VC.leave())
                } else {
                    const dispatcher = connection.playFile('D:/Works/ExDet-Selfbot/sounds/main.wma');
                    dispatcher.on("end",()=> VC.leave())
                }
                dispatcher.on("end",()=> VC.leave())
                .catch(error => {console.log("Hata bulundu")})
                })
                .catch(console.log);   
                }
    }



    if(cmd == `say`) {
        if(!args[1]){
            msg.reply(`Wrong usage, ${p}say {something}`)
            return;
        }  
            msg.channel.send(`${args.join(" ").substring(args[0].length)}`).then(msg.delete(10))
    }


    //add your friends id 

    if (cmd == "callteam") {
        if (!args[1]) {
        msg.delete()
        msg.channel.send("<@id>, <@id>, <@id>, <@id> You are expected.... ")
    }
    if (args[1]) {
        msg.delete()
        msg.channel.send(`<@id>, <@id>, <@id>, <@id> ${args.join(" ").substring(cmd.length+1)}`)
    }
    }

    
    if(cmd == 'bilgi') {
        
        var title = "Information"
        var embed = new RichEmbed()
        .setTitle(`${title}`)
        .setAuthor("fudaylcavus")
        .setcolor()
        .setColor(`${color}`)
        .setDescription(`${descripton}`)
        .setMessage(`${message}`)
        .setFooter(`${footer}`)
        .url()
    }


    





    //Last String of commands    
    })

    //Check Online 307928389996773386 give channel id then your friend id to track
    
    function cOnline() {

        client.guilds.get("307928389996773386").fetchMember("272443689190555648")
        .then(member => {
            var hours = d.getHours()
            var minutes = d.getMinutes()
            hours = ( hours < 10 ? "0" : "" ) + hours
            minutes = ( minutes < 10 ? "0" : "" ) + minutes
            var notifychannel = client.channels.get("516254514039488561")
            if (member.presence.status != "offline") {
                notifychannel.send("``NotLoser => "+ member.presence.status + "`` " + hours + `:`+minutes )
            }
        })
    }

//Admin Commands Without Prefix

    embedOption = false
    client.on("message", msg => { 
        var botsprefix = ["``","```","!","?","=","-","/"]
        if (msg.content.startsWith(op)) return;
        if(msg.author.id != client.user.id) return;
        var mention = /<@[0-9]{6,}?>/g 
        let message = msg.content;
        if (message=="sa") {
            msg.delete()
            msg.channel.send("Selam")
            return;
        }

        if (message=="toggleembed") {
            if (embedOption==true) {
                embedOption = false
            } else {
                embedOption = true
            }
            msg.delete()
            msg.channel.send(embedOption ? "``Embed Aktif``" : "``Embed Devredışı``")

        }
        if (message=="--selfaccount--") {
            // if (msg.author.id == credentials.ExDetID) {
            //     msg.channel.send("SelfAccount zaten aktif!")
            //     console.log("SelfAccount zaten aktif")
            //     return;
            // }
            client.destroy()
            console.log("Signet out from bot account.")
            client.login(credentials.selftoken)
        }


        for (var i = botsprefix.length-1; i >= 0 ; i--) {
            if (message.startsWith(botsprefix[i])) return;
        }

        if (embedOption== false) return;

        //Embed Toggle
        if (message.match(mention)) return;
        if (message != "") {
            msg.delete()
            let embed = new RichEmbed()
            .setTitle(message)
            .setColor("#ff0000")
            msg.channel.send(embed)
        }

        


    })

