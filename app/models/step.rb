class Step < ApplicationRecord

    validates :body, :project_id, presence: true

    belongs_to :project,
        foreign_key: :project_id, 
        class_name: 'Project'

        has_one_attached :photo
end
