class UpdateProjectsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :keys 
  end
end
