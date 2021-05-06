class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.text :keys, array: true, null: false
      t.integer :favorites, null: false
      t.integer :views, null: false
      t.string :category, null: false

      t.timestamps

    end
    add_index :projects, :title
    add_index :projects, :keys
    add_index :projects, :category
  end
end
