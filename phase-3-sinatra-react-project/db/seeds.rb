puts "🌱 Seeding "

# Seed your database here
User.destroy_all
Listing.destroy_all

puts" Creating users..."

4.times do
    User.create(
        username: Faker::Name.first_name.downcase,
        password: rand(1000000..9999999),
        name: Faker::Name.first_name,
        img_url: Faker::Avatar.image )
end

puts" Creating listings..."

5.times do
Listing.create(
    title: Faker::Games::Minecraft.item,
    price: rand(5.00..99.99).round(2),
    description: Faker::Quote.yoda,
    category: "Outfits",
    user_id: User.all.sample.id,
    img_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['outfit'])
    )
end

5.times do
    Listing.create(
        title: Faker::Games::Minecraft.item,
        price: rand(5.00..99.99).round(2),
        description: Faker::Quote.yoda,
        category: "Toys & Games",
        user_id: User.all.sample.id,
        img_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['games'])
        )
end

5.times do
    Listing.create(
        title: Faker::Games::Minecraft.item,
        price: rand(5.00..99.99).round(2),
        description: Faker::Quote.yoda,
        category: "Sports",
        user_id: User.all.sample.id,
        img_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['sports'])
        )
end

5.times do
    Listing.create(
        title: Faker::Games::Minecraft.item,
        price: rand(5.00..99.99).round(2),
        description: Faker::Quote.yoda,
        category: "Furniture",
        user_id: User.all.sample.id,
        img_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['furniture'])
        )
end

5.times do
    Listing.create(
        title: Faker::Games::Minecraft.item,
        price: rand(5.00..99.99).round(2),
        description: Faker::Quote.yoda,
        category: "Pet Supplies",
        user_id: User.all.sample.id,
        img_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['pets'])
        )
end

5.times do
    Listing.create(
        title: Faker::Games::Minecraft.item,
        price: rand(5.00..99.99).round(2),
        description: Faker::Quote.yoda,
        category: "Garden and Outdoor",
        user_id: User.all.sample.id,
        img_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['garden'])
        )
end


puts "✅ Done seeding!"
