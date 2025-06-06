FROM python:3.12-slim

WORKDIR /app

# Setup system deps
RUN apt-get update && apt-get install -y \
  build-essential \
  && rm -rf /var/lib/apt/lists/*

# Setup python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY dist ./dist
COPY api ./api
COPY alembic ./alembic
COPY alembic.ini ./alembic.ini

# Wire up db location
RUN mkdir -p /app/data
VOLUME /app/data

EXPOSE 8000

CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
