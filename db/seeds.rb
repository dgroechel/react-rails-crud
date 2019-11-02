# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

clients = Client.create([
    { first_name: 'Marty', last_name: 'Zelner', email: 'mzelner@gmail.com', phone: '2489210042'},
    { first_name: 'Susan', last_name: 'Block', email: 'hoonigan@icloud.com', phone: '5556358974'},
    { first_name: 'Thomas', last_name: 'Thorton', email: 'tthorton@gmail.com', phone: '6125896363'},
    { first_name: 'Karen', last_name: 'Green', email: 'kgreen@yahoo.com', phone: '6589651234'}
])