class FixProjectsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :password_digest
    remove_column :projects, :session_token


  end
end
