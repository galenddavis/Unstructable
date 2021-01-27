# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_27_212606) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "favorites", default: 0, null: false
    t.integer "views", default: 0, null: false
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "creator_id", null: false
    t.index ["category"], name: "index_projects_on_category"
    t.index ["creator_id"], name: "index_projects_on_creator_id"
    t.index ["title"], name: "index_projects_on_title"
  end

  create_table "steps", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_steps_on_project_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "body", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_tags_on_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "occupation", null: false
    t.string "email", null: false
    t.string "location"
    t.text "user_bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "website"
    t.index ["username"], name: "index_users_on_username"
  end

end
