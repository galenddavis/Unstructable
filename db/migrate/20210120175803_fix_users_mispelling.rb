class FixUsersMispelling < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :webstite
    add_column :users, :website, :string
  end
end
