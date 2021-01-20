class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :occupation, null: false
      t.string :email, null: false
      t.string :location
      t.text :user_bio
      t.string :webstite

      t.timestamps
    end
    add_index :users, :username
  end
end

