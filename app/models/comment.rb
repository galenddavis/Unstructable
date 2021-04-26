class Comment < ApplicationRecord

    validates :body, :project_id, :writer_id, presence: true

    belongs_to :project, 
        foreign_key: :project_id,
        class_name: 'Project'

    belongs_to :writer, 
        foreign_key: :writer_id,
        class_name: 'User'
end
