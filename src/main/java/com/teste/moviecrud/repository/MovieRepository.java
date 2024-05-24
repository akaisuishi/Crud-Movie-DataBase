package com.teste.moviecrud.repository;
import com.teste.moviecrud.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
