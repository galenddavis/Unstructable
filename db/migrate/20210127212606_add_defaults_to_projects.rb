class AddDefaultsToProjects < ActiveRecord::Migration[5.2]
  def change
    change_column_default :projects, :favorites, 0
    change_column_default :projects, :views, 0
  end
end
