class Step < ApplicationRecord

    validates :title, :body, :project_id, presence: true

    belongs_to :project,
        foreign_key: :project_id, 
        class_name: 'Project'
end
