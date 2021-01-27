class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :body, null: false
      t.integer :project_id, null: false

      t.timestamps

    end
    add_column :projects, :creator_id, :integer, null: false
    add_index :projects, :creator_id
    add_index :tags, :project_id
  end
end
