class Tag < ApplicationRecord

    validates :body, :project_id, presence: true

    belongs_to :project,
        foreign_key: :project_id,
        class_name: 'Project'
end
