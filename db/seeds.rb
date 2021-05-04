# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Project.destroy_all
Step.destroy_all


u1 = User.create!(
    username: 'Buster',
    password: 'password',
    occupation: 'robot',
    email: 'sample@email.com',
    location: 'Spain',
)

u2 = User.create!(
    username: 'Roberto',
    password: 'password',
    occupation: 'robot',
    email: 'roberty@email.com',
    location: 'Spain',
)

u3 = User.create!(
    username: 'Chuck',
    password: 'password',
    occupation: 'robot',
    email: 'Chuck@email.com',
    location: 'Spain',
)

u4 = User.create!(
    username: 'Sally',
    password: 'password',
    occupation: 'robot',
    email: 'Sally@email.com',
    location: 'Spain',
)

u5 = User.create!(
    username: 'Robo-Bot',
    password: 'password',
    occupation: 'robot',
    email: 'Robo-Bot@email.com',
    location: 'Spain',
)

u6 = User.create!(
    username: 'Stanley',
    password: 'password',
    occupation: 'robot',
    email: 'Stanley@email.com',
    location: 'Spain',
)

u7 = User.create!(
    username: 'Rodger',
    password: 'password',
    occupation: 'robot',
    email: 'Rodger@email.com',
    location: 'Spain',
)

u8 = User.create!(
    username: 'Alicia',
    password: 'password',
    occupation: 'robot',
    email: 'Alicia@email.com',
    location: 'Spain',
)

u9 = User.create!(
    username: 'Sarah',
    password: 'password',
    occupation: 'robot',
    email: 'Sarah@email.com',
    location: 'Spain',
)

u10 = User.create!(
    username: 'Angie',
    password: 'password',
    occupation: 'robot',
    email: 'Angie@email.com',
    location: 'Spain',
)




# ~~~~~~~~~~~~~~~~~~~Project 1~~~~~~~~~~~~~~~~~~~~

p1 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    favorites: 15,
    views: 38,
    category: 'Circuits',
    creator_id: u1.id,
)

file1 = open('https://unstructable-seeds.s3.amazonaws.com/01_potato.jpg')
p1.title_photo.attach(io: file1, filename: '01_potato.jpg')

step10 = Step.create!(
    title: "Intro",
    body: "So my daughter's first grade class was building potato batteries, and 
    I wanted to make sure that he project put all those other kids in their place.
    Today I'll be showing you how to build a fully functional potato-media PC.",
    project_id: p1.id,
)

step11 = Step.create!(
    title: "Step 1 - Get a Potato",
    body: "Go into your kitchen and grab any old potato. Russet works best, but any will do. 
    If you can sneak out more than one, great!, but even just a single Idaho should output enough power 
    to power the equivalent of a raspberry pi.",
    project_id: p1.id,
)

step12 = Step.create!(
    title: "Step 2 - Google how to build a computer",
    body: "Computers are complex beasts, and if you aren't sure how they're put together, then you 
    might need to do a little research into how all the parts fit together. For instance, It didn't 
    occur to me that I would need a chipset to make this work. Allocate plenty of time to carve one 
    out of a second potato if need be. ",
    project_id: p1.id,
)

step13 = Step.create!(
    title: "Step 3 - Figure out how much power your potato can handle",
    body: "Now we've got the fun stuff. It's time to figure out how much juice we can run through our 
    little spuddy without french frying him. For instance, when I plugged my little tater into wall power, 
    it toasted him, and also blew the circuit breaker for half of my apartment complex. ",
    project_id: p1.id,
)

step14 = Step.create!(
    title: "Step 4 - Do some research into how much raspberry pi's cost",
    body: "This is taking longer than I thought. I think I might need to rethink how viable this whole 
    project actually is. Raspberry Pi's apparently can be used to set up a decent little home theater 
    system. After burning through a couple pounds of potatos and setting a small fire, I think my wife 
    is starting to think that this DIY project is a bad idea.",
    project_id: p1.id,
)

step15 = Step.create!(
    title: "Step 5 - Google how to set up your new Raspberry Pi as a home media system",
    body: "I had to google this. Who would have thought that even setting up a new PC would be this difficult. 
    If anyone has any experience setting up speaker systems, plz comment below. I'm out of my depth here.",
    project_id: p1.id,
)



# ~~~~~~~~~~~~~~~~~~~Project 2~~~~~~~~~~~~~~~~~~~~

p2 = Project.create!(
    title: 'Build a program to file your taxes.',
    favorites: 0,
    views: 106,
    category: 'Circuits',
    creator_id: u2.id,
)

file2 = open('https://unstructable-seeds.s3.amazonaws.com/02_robot.png')
p2.title_photo.attach(io: file2, filename: '02_robot.png')

step20 = Step.create!(
    title: '',
    body: "Tax season is back again, but I everybody's gotta pay the piper. 
    I was sick and tired of going through old receipts and plugging them into turbotax, 
    so I figured, why not work up a quick bot that could do it for me. 
    Boy am I bad at math, but I figured I'd write up a quick python program to do my taxes for me. 
    How hard could it be?",
    project_id: p2.id,
)

step21 = Step.create!(
    title: 'Step 1 Learn to code',
    body: "First things first, Let's pick a coding language. I think that for my pruposes, 
    Python makes the most sense. It seems versitile and from what the forums say, people have assured me 
    that it's pretty easy to pick up. they told me that I needed to download something called vscode 
    first.",
    project_id: p2.id,
)

step22 = Step.create!(
    title: 'Step 2 Continue learning to code',
    body: "Ok, so it turns out that learning to code a program to file my taxes is harder than I thought. 
    I've gotten a basic 'Hello World' program down, and I think that I'm getting close, but it's tricky. 
    Definitely not as easy as those idiots on the message boards made it sound. I'm starting to think 
    that this is a bad idea.",
    project_id: p2.id,
)

step23 = Step.create!(
    title: 'Step 3 Finally figured it out',
    body: "So it's been about four years since I began this project, and now I owe four years of back 
    taxes to the IRS, but I've finally cracked it. I've learned Python and finally got my project in a 
    place where I can pass in my tax forms and get back a fully formatted tax return. If I can still find 
    all my old tax documents, this is going to be a breeze. ",
    project_id: p2.id,
)

step24 = Step.create!(
    title: 'Step 4 Maybe just hire someone to do your taxes',
    body: "I'm writing this from the library in prison. Turns out all the back taxes that I turned in 
    after being processed by Taxy, my tax-bot, were egrigiously incorrect. I was arrested for tax fraud 
    and I'm serving a four year prison sentence. I definitely think that this was a great learnig experience 
    for me, but I'd recommend to any readers out there, just use one of the many existing tax softwares, 
    or hire someone to do them for you. ",
    project_id: p2.id,
)




# ~~~~~~~~~~~~~~~~~~~Project 3~~~~~~~~~~~~~~~~~~~~

p3 = Project.create!(
    title: 'Decorate your car Dashboard',
    favorites: 1,
    views: 98,
    category: 'Crafts',
    creator_id: u3.id,
)

file3 = open('https://unstructable-seeds.s3.amazonaws.com/03_dashboard.jpg')
p3.title_photo.attach(io: file3, filename: '03_dashboard.jpg')

step30 = Step.create!(
    title: 'Intro',
    body: "Have you ever looked at your car's dashboard and thought it was just super boring?
    I'm here to show you how, with just a few cheap ingredients, you can spruce up your
    vehicle!",
    project_id: p3.id,
)

step30 = Step.create!(
    title: 'Step 1 Clean off your car dashboard',
    body: "First things first, you're going to want to start with a clean, empty dash. Take some time and 
    clear out any dust, old CDs, air fresheners that you might have laying around, and if you have the 
    initiative, maybe even give the thing a once over with a vacuum.",
    project_id: p3.id,
)

step30 = Step.create!(
    title: 'Step 2 Sand',
    body: "The first key ingredient to any desert scene is sand. You're going to want to grab some dirt 
    from outside your house and mix it with equal parts sand that you can pick up at any old craft store. 
    While you're there, pick up any set dressing that you might want for your scene. 
    Pro tip** A few small cacti can really bring the whole scene together. Most nursuries carry them for 
    cheap. ",
    project_id: p3.id,
)

step30 = Step.create!(
    title: 'Step 3 Let your creativity flow!',
    body: "Now that you have your base set down above the passenger seat, you can flex those creative muscles 
    and begin to arrange whatever decorations you decided to pick up. As you can see from my photo above, I 
    decided to go simple with some small rocks and shells from my garden and the nearby beach. I also placed a few 
    small cacti and succulents to really bring the space to life. Go nuts!",
    project_id: p3.id,
)

step30 = Step.create!(
    title: 'Step 4 Disclaimer **Important**',
    body: "",
    project_id: p3.id,
)


# ~~~~~~~~~~~~~~~~~~~Project 4~~~~~~~~~~~~~~~~~~~~

p4 = Project.create!(
    title: 'Turn your old jeans into a chair',
    favorites: 5,
    views: 16,
    category: 'Crafts',
    creator_id: u4.id,
)

file4 = open('https://unstructable-seeds.s3.amazonaws.com/04_jeans.jpg')
p4.title_photo.attach(io: file4, filename: '04_jeans.jpg')

step40 = Step.create!(
    title: '',
    body: "I'm sure that many of you, like me, have a collection of jeans that either don't
    fit, or are full of holes. Well, with a little sewing know-how, and some ingenuity you 
    can turn those rags into a stylish piece of furniture.",
    project_id: p4.id,
)


# ~~~~~~~~~~~~~~~~~~~Project 5~~~~~~~~~~~~~~~~~~~~

p5 = Project.create!(
    title: "Homemade Peanut M&Ms",
    favorites: 150,
    views: 348,
    category: 'Cooking',
    creator_id: u3.id,
)

file5 = open('https://unstructable-seeds.s3.amazonaws.com/05_mnms.jpg')
p5.title_photo.attach(io: file5, filename: '05_mnms.jpg')

step50 = Step.create!(
    title: '',
    body: "Everytime we go out, my kids are always asking me to buy candy, but it's just so 
    bad for them. I decided to try my hand at making a healthy alternative. Turns out, they love them!",
    project_id: p5.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 6~~~~~~~~~~~~~~~~~~~~

p6 = Project.create!(
    title: 'Grow your own Vegetables at home',
    favorites: 45,
    views: 67,
    category: 'Cooking',
    creator_id: u2.id,
)

file6 = open('https://unstructable-seeds.s3.amazonaws.com/06_plant.jpg')
p6.title_photo.attach(io: file6, filename: '06_plant.jpg')

step60 = Step.create!(
    title: '',
    body: "Who likes paying an arm and a leg for veggies that go bad just days after you bring them home? 
    Lord knows I don't. Well, why pay for what you can grow with a few dollars worth of seeds 
    and a little bit of dirt from right outside. ",
    project_id: p6.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 7~~~~~~~~~~~~~~~~~~~~

p7 = Project.create!(
    title: 'Convert desk into standing desk',
    favorites: 0,
    views: 2,
    category: 'Workshop',
    creator_id: u5.id,
)

file7 = open('https://unstructable-seeds.s3.amazonaws.com/07_desk.jpg')
p7.title_photo.attach(io: file7, filename: '07_desk.jpg')

step70 = Step.create!(
    title: '',
    body: 'I heard that sitting for too long was really bad for your back, but standing desks 
    can be really bad for your wallet. With this diy, you can take any old desk and raise it up 
    to whatever height you need it to be.',
    project_id: p7.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 8~~~~~~~~~~~~~~~~~~~~

p8 = Project.create!(
    title: 'Refinish an old side table',
    favorites: 19,
    views: 53,
    category: 'Workshop',
    creator_id: u2.id,
)

file8 = open('https://unstructable-seeds.s3.amazonaws.com/08_table.jpg')
p8.title_photo.attach(io: file8, filename: '08_table.jpg')

step80 = Step.create!(
    title: '',
    body: "I bought an old sidetable at a junk sale and wanted to give it new life with some 
    gold spackle. It's a super easy project that anyone can do, perfect for a weekend 
    project with the kids. ",
    project_id: p8.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 9~~~~~~~~~~~~~~~~~~~~

p9 = Project.create!(
    title: 'Repurpose dolls as planters',
    favorites: 5,
    views: 0,
    category: 'Crafts',
    creator_id: u1.id,
)

file9 = open('https://unstructable-seeds.s3.amazonaws.com/09_dolls.jpg')
p9.title_photo.attach(io: file9, filename: '09_dolls.jpg')

step90 = Step.create!(
    title: '',
    body: "My daughter has grown out of her doll phase, but I didn't want to just throw 
    them away, call me sentimental. Instead, I thought, maybe I can use them out in the garden 
    as a way to foster some of the smaller plants until they're ready for transplanting.",
    project_id: p9.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 10~~~~~~~~~~~~~~~~~~~~

p10 = Project.create!(
    title: 'Stylish plastic sunglasses',
    favorites: 1,
    views: 1,
    category: 'Crafts',
    creator_id: u5.id,
)

file10 = open('https://unstructable-seeds.s3.amazonaws.com/10_glasses.jpg')
p10.title_photo.attach(io: file10, filename: '10_glasses.jpg')

step100 = Step.create!(
    title: '',
    body: "This is a fun weekend project to keep my little ones busy while I get a quick nap in on a Sunday. 
    Using any old soda bottle, you can create a template and cut out a fun and stylish pair of sunglasses.",
    project_id: p10.id,
)

