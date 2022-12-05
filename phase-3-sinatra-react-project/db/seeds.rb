puts "🌱 Seeding "

# Seed your database here
User.destroy_all
Listing.destroy_all

puts" Creating users..."

4.times do
    User.create(
        username: Faker::Name.first_name,
        password: rand(1000000..9999999),
        name: Faker::Name.first_name,
        img_url: Faker::Avatar.image )
end

puts" Creating listings..."

20.times do
Listing.create(
    title: Faker::Games::Minecraft.item,
    price: rand(5.00..99.99).round(2),
    description: Faker::Quote.yoda,
    category: ["outfit", "toys", "sports"].sample,
    user_id: User.all.sample.id
    )
end

puts "✅ Done seeding!"
