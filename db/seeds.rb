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


u1 = User.create!(
    username: 'guest',
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

p1 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: "So my daughter's first grade class was building potato batteries, and 
    I wanted to make sure that he project put all those other kids in their place.
    Today I'll be showing you how to build a fully functional potato-gaming PC.",
    favorites: 15,
    views: 38,
    category: 'Circuits',
    creator_id: u1.id,
)

file1 = open('https://unstructable-seeds.s3.amazonaws.com/01_potato.jpg')
p1.title_photo.attach(io: file1, filename: '01_potato.jpg')

p2 = Project.create!(
    title: 'Build a program to file your taxes.',
    body: "Boy am I bad at math, but I'm ok at programming so I figured I'd write 
    up a quick python program to do my taxes for me. How hard could it be?",
    favorites: 0,
    views: 106,
    category: 'Circuits',
    creator_id: u2.id,
)

file2 = open('https://unstructable-seeds.s3.amazonaws.com/02_robot.png')
p2.title_photo.attach(io: file2, filename: '02_robot.png')

p3 = Project.create!(
    title: 'Decorate your car Dashboard',
    body: "Have you ever looked at your car's dashboard and thought it was just super boring?
    I'm here to show you how, with just a few cheap ingredients, you can spruce up your
    vehicle!",
    favorites: 1,
    views: 98,
    category: 'Crafts',
    creator_id: u3.id,
)

file3 = open('https://unstructable-seeds.s3.amazonaws.com/03_dashboard.jpg')
p3.title_photo.attach(io: file3, filename: '03_dashboard.jpg')

p4 = Project.create!(
    title: 'Turn your old jeans into a chair',
    body: "I'm sure that many of you, like me, have a collection of jeans that either don't
    fit, or are full of holes. Well, with a little sewing know-how, and some ingenuity you 
    can turn those rags into a stylish piece of furniture.",
    favorites: 5,
    views: 16,
    category: 'Crafts',
    creator_id: u4.id,
)

file4 = open('https://unstructable-seeds.s3.amazonaws.com/04_jeans.jpg')
p4.title_photo.attach(io: file4, filename: '04_jeans.jpg')

p5 = Project.create!(
    title: 'Homemade Peanut M&Ms',
    body: "Everytime we go out, my kids are always asking me to buy candy, but it's just so 
    bad for them. I decided to try my hand at making a healthy alternative. Turns out, they love them!",
    favorites: 150,
    views: 348,
    category: 'Cooking',
    creator_id: u3.id,
)

file5 = open('https://unstructable-seeds.s3.amazonaws.com/05_mnms.jpg')
p5.title_photo.attach(io: file5, filename: '05_mnms.jpg')

p6 = Project.create!(
    title: 'Grow your own Vegetables at home',
    body: "Who likes paying an arm and a leg for veggies that go bad just days after you bring them home? 
    Lord knows I don't. Well, why pay for what you can grow with a few dollars worth of seeds 
    and a little bit of dirt from right outside. ",
    favorites: 45,
    views: 67,
    category: 'Cooking',
    creator_id: u2.id,
)

file6 = open('https://unstructable-seeds.s3.amazonaws.com/06_plant.jpg')
p6.title_photo.attach(io: file6, filename: '06_plant.jpg')

p7 = Project.create!(
    title: 'Convert desk into standing desk',
    body: 'I heard that sitting for too long was really bad for your back, but standing desks 
    can be really bad for your wallet. With this diy, you can take any old desk and raise it up 
    to whatever height you need it to be.',
    favorites: 0,
    views: 2,
    category: 'Workshop',
    creator_id: u5.id,
)

file7 = open('https://unstructable-seeds.s3.amazonaws.com/07_desk.jpg')
p7.title_photo.attach(io: file7, filename: '07_desk.jpg')

p8 = Project.create!(
    title: 'Refinish an old side table',
    body: "I bought an old sidetable at a junk sale and wanted to give it new life with some 
    gold spackle. It's a super easy project that anyone can do, perfect for a weekend 
    project with the kids. ",
    favorites: 19,
    views: 53,
    category: 'Workshop',
    creator_id: u2.id,
)

file8 = open('https://unstructable-seeds.s3.amazonaws.com/08_table.jpg')
p8.title_photo.attach(io: file8, filename: '08_table.jpg')

p9 = Project.create!(
    title: 'Repurpose dolls as planters',
    body: "My daughter has grown out of her doll phase, but I didn't want to just throw 
    them away, call me sentimental. Instead, I thought, maybe I can use them out in the garden 
    as a way to foster some of the smaller plants until they're ready for transplanting.",
    favorites: 5,
    views: 0,
    category: 'Crafts',
    creator_id: u1.id,
)

file9 = open('https://unstructable-seeds.s3.amazonaws.com/09_dolls.jpg')
p9.title_photo.attach(io: file9, filename: '09_dolls.jpg')

p10 = Project.create!(
    title: 'Stylish plastic sunglasses',
    body: "This is a fun weekend project to keep my little ones busy while I get a quick nap in on a Sunday. 
    Using any old soda bottle, you can create a template and cut out a fun and stylish pair of sunglasses.",
    favorites: 1,
    views: 1,
    category: 'Crafts',
    creator_id: u5.id,
)

file10 = open('https://unstructable-seeds.s3.amazonaws.com/10_glasses.jpg')
p10.title_photo.attach(io: file10, filename: '10_glasses.jpg')

