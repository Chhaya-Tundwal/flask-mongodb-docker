FROM python:3.7.4

ADD . /cloud
WORKDIR /cloud
RUN pip install --upgrade pip
RUN pip install flask
RUN pip install pymongo
RUN pip install bcrypt
RUN pip install pandas
