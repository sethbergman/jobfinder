FROM node:5
RUN git clone https://github.com/sethbergman/jobfinder.git && cd jobfinder
RUN npm install
