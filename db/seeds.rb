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
Comment.destroy_all


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

c1 = Comment.create!(
    body: "jesus dude, your st8 up an idiot.",
    writer_id: u10.id,
    project_id: p1.id
)

c2 = Comment.create!(
    body: "ur next project should be 'Build a brain out of a potato' sounds like it would be an upgrade.",
    writer_id: u8.id,
    project_id: p1.id
)

c3 = Comment.create!(
    body: "love the idea! I'm sure there's a way to make it work! Keep trying!",
    writer_id: u7.id,
    project_id: p1.id
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

c4 = Comment.create!(
    body: "dude I'm an accountant. Hit me up if you need help with your taxes.",
    writer_id: u6.id,
    project_id: p2.id
)

c5 = Comment.create!(
    body: "lol",
    writer_id: u3.id,
    project_id: p2.id
)

c6 = Comment.create!(
    body: "Cool idea, but don't these exist already?",
    writer_id: u5.id,
    project_id: p2.id
)

c7 = Comment.create!(
    body: "Good luck man, but I think there might be easier languages to do this with.",
    writer_id: u10.id,
    project_id: p2.id
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

step31 = Step.create!(
    title: 'Step 1 Clean off your car dashboard',
    body: "First things first, you're going to want to start with a clean, empty dash. Take some time and 
    clear out any dust, old CDs, air fresheners that you might have laying around, and if you have the 
    initiative, maybe even give the thing a once over with a vacuum.",
    project_id: p3.id,
)

step32 = Step.create!(
    title: 'Step 2 Sand',
    body: "The first key ingredient to any desert scene is sand. You're going to want to grab some dirt 
    from outside your house and mix it with equal parts sand that you can pick up at any old craft store. 
    While you're there, pick up any set dressing that you might want for your scene. 
    Pro tip** A few small cacti can really bring the whole scene together. Most nursuries carry them for 
    cheap. ",
    project_id: p3.id,
)

step33 = Step.create!(
    title: 'Step 3 Let your creativity flow!',
    body: "Now that you have your base set down above the passenger seat, you can flex those creative muscles 
    and begin to arrange whatever decorations you decided to pick up. As you can see from my photo above, I 
    decided to go simple with some small rocks and shells from my garden and the nearby beach. I also placed a few 
    small cacti and succulents to really bring the space to life. Go nuts!",
    project_id: p3.id,
)

step34 = Step.create!(
    title: 'Step 4 Disclaimer **Important**',
    body: "I've been told that a number of the people who have followed this project's instructions 
    have ended up injured due to airborn cacti. Please understand that anyone following these directions 
    does so at their own risk. I assume no responsibility for any injuries that arise from this 
    project.",
    project_id: p3.id,
)

c8 = Comment.create!(
    body: "holy crap, this is a terrible idea.",
    writer_id: u9.id,
    project_id: p3.id
)

c9 = Comment.create!(
    body: "tried this and got a face full of catus. You will be hearing from my lawyer",
    writer_id: u7.id,
    project_id: p3.id
)

c10 = Comment.create!(
    body: "I nearly lost an eye when I hit the brakes too hard. What is wrong with you? ",
    writer_id: u4.id,
    project_id: p3.id
)


# ~~~~~~~~~~~~~~~~~~~Project 4~~~~~~~~~~~~~~~~~~~~

p4 = Project.create!(
    title: 'Turn your old jeans into a chair',
    favorites: 5,
    views: 16,
    category: 'Workshop',
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

step41 = Step.create!(
    title: 'Step 1 Wear out multiple pairs of jeans',
    body: "This first step is easy. Wear out as many pairs of jeans as possible. Ideally they would 
    all be the same size, but that goes without saying. Take some of your least favorite jeans and 
    either wear them out or outgrow them. ",
    project_id: p4.id,
)

step42 = Step.create!(
    title: 'Step 2 Sew snaps onto the ends of legs',
    body: "Snaps can be purchased for cheap at any fabric store. You'll need at least two or three per 
    leg, depending on how thick the fabric is. What you want to do is alternate legs so that that 
    they can be snapped together in an alternating pattern. The idea is that why eventually sewing the tops 
    of the jeans together and being able to snap the legs up, the legs will stand straight up.",
    project_id: p4.id,
)

step43 = Step.create!(
    title: 'Step 3 Begin to sew tops of jeans together',
    body: "Now that the legs can snap together, begin to sew the front of the waistlines together. Begin 
    to make your way around, but when you get almost all the way around, leave a little bit of space. 
    When you're finished with this step, you the pants should almost be completely sewn up. This is the 
    point where you begin to stuff them. You can use cotton stuffing, I used old ripped up t-shirts. 
    Either way, this is where the chair begins to take form.",
    project_id: p4.id,
)

step44 = Step.create!(
    title: 'Step 4 Stuff cotton and close up',
    body: "Continue to stuff the pants, making sure to work the material all the way up the legs. As you 
    stuff them, snap the legs into place and they should begin to fold upwards, giving the chair it's 
    shape and making it less of a flat octopus. Once you've got the chair to it's desired firmness, 
    sew up the remaining length of waist and make any final positioning adjustments to the legs. 
    Voila, your chair is complete!",
    project_id: p4.id,
)

c11 = Comment.create!(
    body: "terrifying",
    writer_id: u4.id,
    project_id: p4.id
)

c12 = Comment.create!(
    body: "I fear no man, but this thing scares me.",
    writer_id: u4.id,
    project_id: p4.id
)

c13 = Comment.create!(
    body: "I have too many pants, can I make two?",
    writer_id: u4.id,
    project_id: p4.id
)

c14 = Comment.create!(
    body: "I think if I went to someone's house and saw this, I would leave.",
    writer_id: u4.id,
    project_id: p4.id
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

step51 = Step.create!(
    title: "Step 1 Make sure kids aren't allergic",
    body: "I can't stress enough that before you start this, ensure that your children don't suffer from 
    a peanut allergy. Obviously those allergies can be very severe and you want to ensure that your 
    kids and other snackers will be safe to enjoy your soon to be treats.",
    project_id: p5.id,
)

step52 = Step.create!(
    title: 'Step 2 Warm up the hot glue gun',
    body: "The most important part of this recipe is the hot glue, that's going to act as your binding 
    agent and it's going to be the difference between eating homemade peanut M&Ms and just eating peanuts 
    and M&Ms together. So set your glue gun to warm, you still want to be able to handle and mold the glue 
    while it's warm. While that's heating up, separate the peanuts and the candies into two separate bowls.",
    project_id: p5.id,
)

step53 = Step.create!(
    title: 'Step 3 Have kids pick favorite flavors',
    body: "If you're children have favorite colors or flavors of M&Ms, have them sort them out. This is 
    a perfect opporrtunity to get your kids involved. Have them work a little bit for their snack ;).",
    project_id: p5.id,
)

step54 = Step.create!(
    title: 'Step 4 Time to glue',
    body: "Ok, so now that you have everything set up and ready to go, it's time to get started with the 
    actual assembly. This part of the project can be a tad dangerous, so it's probably best to do this part for 
    your kids yourself. What you're going to want to do is take a single peanut and apply 
    just a dab of glue. Let it cool for a moment so it won't melt the chocolate, and then stick an M&M to the side.",
    project_id: p5.id,
)

step54 = Step.create!(
    title: 'Step 5 Wait to dry and taste!',
    body: "Follow step four until you have enough peanut M&Ms and let them cool so that the glue doesn't 
    burn your mouth. Once they're cooled, serve in a small bowl. Remember that peanuts are surprisingly high 
    in calories. Make sure to keep track of how much snacking your little ones are doing. ",
    project_id: p5.id,
)

step55 = Step.create!(
    title: 'Disclaimer',
    body: "It has come to my attention that people are claiming that this project is dangerous. I want 
    to reiterate that you need to wait for the glue to cool before eating. It IS food safe, and I've been 
    making these snacks for years. If you're hurting yourself, that's on you. I take no responsibility.",
    project_id: p5.id,
)

c15 = Comment.create!(
    body: "you're going to kill someone lady. What is wrong with you?",
    writer_id: u4.id,
    project_id: p5.id
)

c16 = Comment.create!(
    body: "I'm afraid for your children",
    writer_id: u2.id,
    project_id: p5.id
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
    and a little bit of dirt from right outside.",
    project_id: p6.id,
)

step61 = Step.create!(
    title: 'Step 1 Research your local environment',
    body: "Before you do anything else, one of the most important bit of knowledge to have is to 
    understand what kind of plants can survive your local environment. If you live somewhere hot like 
    Arizona, you're going to be able to grow differnt plants than if you live somewhere colder like Minnesota. 
    Your local parks and wildlife website should be able to give you a list of some of the plants that 
    flourish in your local ecosystem.",
    project_id: p6.id,
)

step62 = Step.create!(
    title: 'Step 2 Take a trip to your local nursury',
    body: "Now that you have an idea of what can survive and thrive where you live, take a trip to your 
    nearest nursury. If you don't happen to live near one, there is also a large selection of seeds that can 
    be purchased somewhere like Amazon. I'd recommend purchasing some flowers or small herbs in addition to 
    any vegetables that you might like to grow. Other plants can help fill out your garden as well as help 
    nourish the soil.",
    project_id: p6.id,
)

step63 = Step.create!(
    title: 'Step 3 Clear out a small space for plants',
    body: "Now that you have all the seeds you need, it's time to plan out where you're going to plant them. 
    Either find a place in your yard if you have one or set up a couple of pots to hold everything. If you 
    don't have any pots, some old cans and jars can be used to start your plants until they outgrow them. 
    Take some time to plan out your layout and I'll see you in the next step!",
    project_id: p6.id,
)

step64 = Step.create!(
    title: 'Step 4 Begin to plant',
    body: "Lets get going! Throw on some clothes that you don't mind getting dirty and gather your seeds 
    and tools! Begin by making a small hole in the dirt and toss in one of two seeds. Gently cover the seeds 
    and water them until the dirt is completely wet. Continue until your seeds are all planted and you're 
    done!",
    project_id: p6.id,
)

step65 = Step.create!(
    title: 'Step 5 Ongoing Maintanence',
    body: "Now that everything is planted, the next step is wait, but once they begin sprouting, each plant 
    will have potentially different care instructions. Consult your earlier research and make sure that you 
    maintain a strict watering schedule to make sure that each plant is getting the nutrients they need. 
    In a few weeks, with something quick growing like peppers, you might be able to harvest! From there, the 
    care continues, and there you have it, fresh vegetables! Enjoy!",
    project_id: p6.id,
)

c17 = Comment.create!(
    body: "Good luck with the gardening! Hope it works!",
    writer_id: u3.id,
    project_id: p6.id
)

c18 = Comment.create!(
    body: "what are you growing?",
    writer_id: u5.id,
    project_id: p6.id
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
    title: 'Intro',
    body: 'I heard that sitting for too long was really bad for your back, but standing desks 
    can be really bad for your wallet. With this diy, you can take any old desk and raise it up 
    to whatever height you need it to be.',
    project_id: p7.id,
)

step71 = Step.create!(
    title: 'Step 1 Buy some sturdy wood for the legs',
    body: "The first step involves making a trip to home depot to grab wood as well as some nails for 
    attaching the new leg extenders to your existing table. Make sure that to buy a nice sturdy wood like 
    oak or some other hard wood. No balsa allowed! Make sure that whatever thickness wood you buy, you 
    get nails that will be long enough to make it all the way through and well into the wood of the 
    table.",
    project_id: p7.id,
)

step72 = Step.create!(
    title: 'Step 2 Measure twice, cut once',
    body: "Now that you've got your supplies, and you've gotten back home, we're going to need to figure 
    out how high the new table needs to be. Start by standing in a comfortable position and raising your arms as 
    if working at a keyboard. Measure from there to the floor and that's your table height! Now that you 
    have that number, measure the height of the existing table and get the difference. That's how high your 
    new leg extenders need to be. Now, just start cutting and we'll be back with the next step.",
    project_id: p7.id,
)

step73 = Step.create!(
    title: 'Step 3 Attach new leg extenders',
    body: "Now that you have the pieces all cut, we just lay your table on it's side and begin to hammer 
    on the pieces you just cut. Do your best to make them straight and for good measure, throw a couple of 
    nails into each piece for extra strength.",
    project_id: p7.id,
)

step74 = Step.create!(
    title: 'Step 4 Double check structural integrity',
    body: "Now that you have everything nailed up, flip the table over and make sure that it stands under 
    it's own weight before setting everything up on top. Everything seems fine with my project so I'm going 
    to starting setting my computer up on top. Place things slowly so that if things begin to fail, you can 
    take things off before it collapses. Once you're sure that the table will support everything's weight, 
    set up your desk however you'd like.",
    project_id: p7.id,
)

step75 = Step.create!(
    title: 'Disclaimer ** My desk collapsed',
    body: "Just as a heads up, the desk that I used when I created this project has since collapsed and my 
    computer is broke. I think that maybe I didn't attach the legs well enough. Other people may not have this 
    issue, but I will be trying again. Stay tuned for my next attempt. Hopefully I'll have better luck.",
    project_id: p7.id,
)

c19 = Comment.create!(
    body: "consider renaming this, 'How to break your computer'",
    writer_id: u7.id,
    project_id: p7.id
)

c20 = Comment.create!(
    body: "love the idea, but I feel like you could just build an actual standing desk",
    writer_id: u8.id,
    project_id: p7.id
)

c21 = Comment.create!(
    body: "Dang, sorry to hear about your computer. Better lick next time",
    writer_id: u10.id,
    project_id: p7.id
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
    title: 'Intro - What are we doing?',
    body: "I bought an old sidetable at a junk sale and wanted to give it new life with some 
    gold spackle. It's a super easy project that anyone can do, perfect for a weekend 
    project with the kids. ",
    project_id: p8.id,
)

step81 = Step.create!(
    title: 'Step 1 - Sand down old table',
    body: "The first step is to prep the new table that you've purchased. In order to get a nice even coat 
    of paint on the table you're going to need to sand down any of the old paint or finish that already 
    exists. By using sdome high-grit sandpaper, you can usually get any old paint off without taking off 
    too much of the wood. ",
    project_id: p8.id,
)

step82 = Step.create!(
    title: 'Step 2 - Base Coat',
    body: "Now that you've got the table prepped, we can put down our FIRST layer of new paint. I chose a 
    simple white and you want to make sure that you lay down a nice even coat. Don't worry if you're not 
    getting as thick of a coat as you want, we're going to be applying more paint in the next step. Now 
    let the paint dry.",
    project_id: p8.id,
)

step83 = Step.create!(
    title: 'Step 3 - Multiple Coats',
    body: "Now that the first coat of paint has dried, we're going to lay down another few coats. Lay down 
    the paint evenly and allow it to completely dry before moving on to the next one. Keep putting down 
    more layers until you have the coverage that you're looking for.",
    project_id: p8.id,
)

step84 = Step.create!(
    title: 'Step 4 - Finishing touches',
    body: "Now that you've gotten your full base coat on the table, now we can focus on getting some of the 
    finer details set down. As you can see from my above photo, I've done some really cool streaks of a 
    lovely gold sparkle paint and it's become quite the conversation starter for when people come over! I 
    can't wait to see what you come up with!",
    project_id: p8.id,
)

c22 = Comment.create!(
    body: "that gold paint is so ugly man",
    writer_id: u3.id,
    project_id: p8.id
)

c23 = Comment.create!(
    body: "next time just leave it white, looks bad with the gold.",
    writer_id: u4.id,
    project_id: p8.id
)

c24 = Comment.create!(
    body: "lol dude, hope you're not a professional interior designer",
    writer_id: u6.id,
    project_id: p8.id
)

c25 = Comment.create!(
    body: "...",
    writer_id: u9.id,
    project_id: p8.id
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

step91 = Step.create!(
    title: 'Step 1 - Clean out some old boxes in the basement',
    body: "So now that my daughter is out of the house, we have a ton of boxes of old toys in the basement 
    that are just taking up space. I recently went down there and found a whole box full of old dollies. 
    They were just taking up space and my husband was telling me to just throw them in the garage sale 
    pile, but I had other ideas.",
    project_id: p9.id,
)

step92 = Step.create!(
    title: 'Step 2 - Remove doll heads',
    body: "I started by ripping the heads off of the dolls. You can discard the bodies, you don't 
    need them for the rest of this project. After you have the heads removed, you can take a box cutter 
    and slice off the top of the head. Once it's opened up, it's now primed for the next step.",
    project_id: p9.id,
)

step93 = Step.create!(
    title: 'Step 4 - Get some seeds',
    body: "Now that you have some hollowed out heads, it's time to grab some soil and seeds. What you're going 
    to do is fill the head about half way and place a seed or two inside. Then use more soil to get the 
    head to about halfway. Give it a water and begin to prep the next head in the same way.",
    project_id: p9.id,
)

step94 = Step.create!(
    title: 'Step 5 - Throw em up on the Insta',
    body: "Now that we've got our heads finished, you might want to wait a few days for them to start 
    to sprout, but once they do, you can post them on social media for clout with the other moms! These 
    are fun, exciting decorations that you can sprinkle throughout your garden! <3",
    project_id: p9.id,
)

c26 = Comment.create!(
    body: "great halloween decorations!",
    writer_id: u3.id,
    project_id: p9.id
)

c27 = Comment.create!(
    body: "very spooky. love these",
    writer_id: u2.id,
    project_id: p9.id
)

c28 = Comment.create!(
    body: "im gonna be seeing these in my nightmares tonight",
    writer_id: u10.id,
    project_id: p9.id
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

step101 = Step.create!(
    title: '',
    body: "If you're like me, you probably end up with one or two soda bottles around the house at the end 
    of the week. I usually recycle them, but I was trying to come up with a fun project that I could do 
    with my kids when they came over over for the weekend and I had a stroke of genius. I drew up a simple 
    template for a pair of cool sunglasses and that was it for prep work. ",
    project_id: p10.id,
)

step102 = Step.create!(
    title: '',
    body: "Once the kids are over, all you have to do is tape the stencil over a freshly emptied and washed 
    soda bottle. Have your kids take some scissors and cut around the stencil. Once they have it cut out, 
    they can cut little notches that sit on the ears. Boom, all of a sudden you have a funky pair of 
    sunglasses that your kids can wear out to the park.",
    project_id: p10.id,
)

step103 = Step.create!(
    title: '',
    body: "Pro Tip: If the glasses aren't staying on your face, you can heat the plastic over a low stove 
    flame until they're a little pliable. Then you should be able to mold the plastic into more of a curved 
    shape around your kid's face. ",
    project_id: p10.id,
)

step104 = Step.create!(
    title: '',
    body: "Warning: If you try the last step. Definitely wait until the plastic cools a little bit. I've 
    gotten some angry emails from parents who have accidentally burned their children. Look, if you're dumb 
    enough to press hot plastic against your child's face, that's on you. Don't blame me for your idiocy.",
    project_id: p10.id,
)

c29 = Comment.create!(
    body: "I can't believe that I tried this! Cut myself and then burned my face trying to shape them!",
    writer_id: u6.id,
    project_id: p10.id
)


c30 = Comment.create!(
    body: "seems really obvious why these kids live with their mom",
    writer_id: u2.id,
    project_id: p10.id
)


c31 = Comment.create!(
    body: "seems dangerous to press hot plastic against your child's face...",
    writer_id: u9.id,
    project_id: p10.id
)

# ~~~~~~~~~~~~~~~~~~~Project 11~~~~~~~~~~~~~~~~~~~~

p11 = Project.create!(
    title: 'Create a flashy, creative lampshade',
    favorites: 10,
    views: 500,
    category: 'Crafts',
    creator_id: u8.id,
)

file11 = open('https://unstructable-seeds.s3.amazonaws.com/11_lampshade.jpg')
p11.title_photo.attach(io: file11, filename: '11_lampshade.jpg')

step110 = Step.create!(
    title: '',
    body: "So last week I picked up this old lamp from a yard sale, but when I brought it home, my husband 
    hated. The plastic lampshade had gotten yellowed over time, but I saw the potential. I decided to take 
    it into my workshop and see what I could do. Today I'm going to show you what's possible with a little 
    bit of creativity and some elbow grease to spruce up any old lamp.",
    project_id: p11.id,
)

step111 = Step.create!(
    title: 'Step 1 - Decoration',
    body: "So this project requires very few tools, basically some hot glue and silver paint. I decided 
    that I wanted organic, free-flowing shapes on the lamp shade, so I fired up the old glue gun 
    and began to weave some basic vine like shapes across the surface of the lampshade. After applying 
    the glue, I was able to use a toothpick to make any final adjustments before it cooled. ",
    project_id: p11.id,
)

step112 = Step.create!(
    title: 'Step 2 - Paint',
    body: "After waiting for the glue to dry, I decided to pick out the new color that I wanted for the 
    shade. I settled on a shiny silver that I had left over from an old project. I took the lampshade off 
    and gave it a few light passes with the paint. Let the paint dry between applications. Once I 
    was finished, the light playing off the glue underneath really caught the light and started to pop.",
    project_id: p11.id,
)

step113 = Step.create!(
    title: 'Step 3 Throw it away again',
    body: "So my husband still didn't like it. He told me, 'Jeff, the Robinson's are coming to dinner 
    in a few days, and God help me, that thing better be gone by then'. I'm putting it back in the garage, 
    but I'm going to try and revamp it again. My creative spirit will not be diminished.",
    project_id: p11.id,
)

c32 = Comment.create!(
    body: "I think that you and the hubby need to have a serious talk about him putting you down",
    writer_id: u1.id,
    project_id: p11.id
)

c33 = Comment.create!(
    body: "this might not be my place to say, but your husband seems like a real jerk. The lamp came 
    out beautifully.",
    writer_id: u2.id,
    project_id: p11.id
)

# ~~~~~~~~~~~~~~~~~~~Project 12~~~~~~~~~~~~~~~~~~~~

p12 = Project.create!(
    title: 'Build your own shelves',
    favorites: 150,
    views: 200,
    category: 'Workshop',
    creator_id: u9.id,
)

file12 = open('https://unstructable-seeds.s3.amazonaws.com/12_shelves.jpg')
p12.title_photo.attach(io: file12, filename: '12_shelves.jpg')

step120 = Step.create!(
    title: '',
    body: "If you have extra bricks laying around, this makes a great addition to any dorm room or frat 
    house. We don't all have money to spend on new furniture and as Walt Whitman says, 'Necessity is the 
    mother of invention'. With just a few basic steps, I'll show you how to build a minimal and asthetic 
    set of shelves for clothes, a TV, or whatever else you might need.",
    project_id: p12.id,
)

step121 = Step.create!(
    title: 'Step 1 - Get bricks',
    body: "",
    project_id: p12.id,
)

step122 = Step.create!(
    title: '',
    body: "Build cheap and easy shelves out of extra bricks",
    project_id: p12.id,
)

step123 = Step.create!(
    title: '',
    body: "Build cheap and easy shelves out of extra bricks",
    project_id: p12.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 13~~~~~~~~~~~~~~~~~~~~

p13 = Project.create!(
    title: 'Create outlet cord hanger',
    favorites: 0,
    views: 200,
    category: 'Circuits',
    creator_id: u5.id,
)

file13 = open('https://unstructable-seeds.s3.amazonaws.com/13_cords.png')
p13.title_photo.attach(io: file13, filename: '13_cords.png')

step130 = Step.create!(
    title: '',
    body: "Hang long cords from outlet hooks",
    project_id: p13.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 14~~~~~~~~~~~~~~~~~~~~

p14 = Project.create!(
    title: 'DIY water hose',
    favorites: 5,
    views: 9,
    category: 'Cooking',
    creator_id: u6.id,
)

file14 = open('https://unstructable-seeds.s3.amazonaws.com/14_faucet.jpg')
p14.title_photo.attach(io: file14, filename: '14_faucet.jpg')

step140 = Step.create!(
    title: '',
    body: "Focus faucet with extra water bottle",
    project_id: p14.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 15~~~~~~~~~~~~~~~~~~~~

p15 = Project.create!(
    title: 'Holiday Snowman cakes',
    favorites: 25,
    views: 57,
    category: 'Cooking',
    creator_id: u4.id,
)

file15 = open('https://unstructable-seeds.s3.amazonaws.com/15_snowmen.jpg')
p15.title_photo.attach(io: file15, filename: '15_snowmen.jpg')

step150 = Step.create!(
    title: '',
    body: "Holiday celebrations with Snowmen Cakes",
    project_id: p15.id,
)

# ~~~~~~~~~~~~~~~~~~~Project 16~~~~~~~~~~~~~~~~~~~~

p16 = Project.create!(
    title: 'How to install your new CPU',
    favorites: 2,
    views: 6,
    category: 'Circuits',
    creator_id: u10.id,
)

file16 = open('https://unstructable-seeds.s3.amazonaws.com/16_thermalpaste.jpg')
p16.title_photo.attach(io: file16, filename: '16_thermalpaste.jpg')

step160 = Step.create!(
    title: '',
    body: "How to install your new CPU, quick and easy",
    project_id: p16.id,
)

