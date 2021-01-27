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

p1 = Project.create!(
    title: 'Build a DIY Computer out of a Potato',
    body: 'So my computer broke, and I had too many potatoes.',
    favorites: 1,
    views: 1,
    category: 'circuits',
    creator_id: u1.id,
)