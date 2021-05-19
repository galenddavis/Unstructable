
class Api::ProjectsController < ApplicationController

     def index
         @category = params[:category]
         if @category == ""
            @projects = Project.all
         else
            @projects = Project.where(category: @category)
         end
         render :index
     end

     def show
        @project = Project.find(params[:id])
        @projects = Project.all 
        render :show
      #   render '/api/projects/show' 
     end

     def create
        @project = Project.new(project_params)
        @project.creator_id = current_user.id

        if @project.save
            @project.steps.create!(title: "Intro + Supplies (Click to Edit)", body: "")
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end 
     end

     def update
        @project = Project.find_by(id: params[:id])
        debugger
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
     end

     def destroy
      @project = Project.find(params[:id])
      if @project.destroy
         # @project.title_photo.destroy
         @project.steps.each do |step|
   
            step.destroy!
         end
      end
      render :show
     end

     private

     def project_params
        params.require(:project).permit(:title, :body, :category, :title_photo)
     end
end
