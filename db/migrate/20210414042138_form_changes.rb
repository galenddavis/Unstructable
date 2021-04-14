class FormChanges < ActiveRecord::Migration[5.2]
  def change
    change_column_null :projects, :title, true
    change_column_null :projects, :category, true 
    change_column_null :steps, :title, true
    change_column_null :steps, :body, true
    
  end
end
