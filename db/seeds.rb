# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

u4 = User.create!(
    username: 'Robo-Bot',
    password: 'password',
    occupation: 'robot',
    email: 'Robo-Bot@email.com',
    location: 'Spain',
)

p1 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p2 = Project.create!(
    title: 'Build a program to file your taxes poorly.',
    body: 'Boy am I bad at math.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u2.id,
)

p3 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p4 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p5 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p6 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p7 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p8 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p9 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

p10 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'Circuits',
    creator_id: u1.id,
)

