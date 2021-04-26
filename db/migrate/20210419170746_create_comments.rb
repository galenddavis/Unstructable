class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :writer_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :comments, :project_id
  end
end
