class Api::ProjectsController < ApplicationController

     def index
        @projects = Project.all
        #debugger
        render '/api/projects/index' 
     end

     def show
        @project = Project.find(params[:id]) 
        render '/api/projects/show' 
     end

     def create
        @project = Project.new(project_params)
        @project.creator_id = current_user.id
        #debugger
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end 
     end

     def update
        @project = Project.find_by(id: params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
     end

     def destroy
        @project = Project.find(params[:id])
        @project.destroy

        render :show
     end

     private

     def project_params
        params.require(:project).permit(:title, :body, :category)
     end
end
