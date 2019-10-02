CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    priority INTEGER NOT NULL,
    description TEXT,
    delivery_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    project_id INTEGER REFERENCES projects(id)
);

INSERT INTO projects(name, priority, description, delivery_date)
    VALUES('Make a web app', 1, 'Using Javascript', '2019-05-12');

INSERT INTO projects(name, priority, description, delivery_date)
    VALUES('Make an app', 1, 'Using Dart', '2019-05-12');
	
INSERT INTO projects(name, priority, description, delivery_date)
    VALUES('Make a desktop app', 1, 'Using C++', '2019-05-12');

-- INSERT TASKS DATA
	
INSERT INTO tasks(name, done, project_id)
    VALUES('Download Vuejs', false, 1);

INSERT INTO tasks(name, done, project_id)
    VALUES('Create UI WEB', false, 1);

INSERT INTO tasks(name, done, project_id)
    VALUES('Download Flutter', false, 2);

INSERT INTO tasks(name, done, project_id)
    VALUES('Design', false, 2);