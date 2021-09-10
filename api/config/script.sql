CREATE TABLE public.usuarios{
    nombre varchar NOT NULL,
    id varchar NOT NULL,
    apellidos varchar NOT NULL,
    rol int4 NOT NULL,
    clave varchar NOT NULL
}
CREATE TABLE public.categorias (
	nombre varchar NOT NULL,
	id varchar NOT NULL
);