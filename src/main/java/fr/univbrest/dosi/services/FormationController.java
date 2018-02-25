package fr.univbrest.dosi.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.bean.Enseignant;
import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.business.FormationBusiness;

@RestController
public class FormationController {
	private FormationBusiness business;
	
	@Autowired
	public FormationController(FormationBusiness business) {
		this.business = business;
	}
	
	@GetMapping(value = "/formation/{codeFormation}")
    public Formation getDataByCode(@PathVariable String codeFormation) {
		return business.getFormationByCode(codeFormation).get(0);
      
    }
	
	@GetMapping(value = "/formation/nom/{nomFormation}")
    public List<Formation> getDataByNom(@PathVariable String nomFormation) {
		return business.getFormationByNom(nomFormation);
      
    }
	
	@GetMapping(value = "/formation")
    public List<Formation> getAllData() {
		return business.showAll();
    }
	

}
