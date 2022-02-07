package service;

import interfaceService.IEstablecimientoService;
import interfaz.IEstablecimiento;
import modelo.Establecimiento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EstablecimientoService implements IEstablecimientoService {
    @Autowired
    private IEstablecimiento data;
    @Override
    public List<Establecimiento> listar() {
        return (List<Establecimiento>) data.findAll();
    }

    @Override
    public Optional<Establecimiento> listarID(Integer id) {
        return Optional.empty();
    }

    @Override
    public int save(Establecimiento p) {
        return 0;
    }

    @Override
    public void delet(Integer id) {

    }
}
