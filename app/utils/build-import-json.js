import Ember from 'ember';

export function buildImportFromSchemas(schemas) {
  let output = {};

  output.predisposing_conditions = [];
  output.security_controls = [];

  schemas.forEach((schema) => {
    let schemaOutput = buildImportFromSchema(schema.get('schema'));
    output.predisposing_conditions = output.predisposing_conditions.concat(schemaOutput.predisposing_conditions);
    output.security_controls = output.security_controls.concat(schemaOutput.security_controls);
  });

  return output;
}

export function buildImportFromSchema(schema) {
  let output = {};
  output.predisposing_conditions = [];
  output.security_controls = [];

  if(schema.properties.predisposing_conditions) {
    Ember.keys(schema.properties.predisposing_conditions.properties).forEach((pdcHandle) => {
      let pdc = schema.properties.predisposing_conditions.properties[pdcHandle];
      output.predisposing_conditions.push({
        handle: pdcHandle,
        name: pdc.title,
        description: '--',
        pervasiveness: 0
      });
    });
  }

  Ember.keys(schema.properties.security_controls.properties).forEach((scHandle) => {
    let sc = schema.properties.security_controls.properties[scHandle];
    let status = 'unimplemented';

    if(sc.type !== "object") {
      return
    }

    let implementedProperty = Ember.getWithDefault(sc, 'properties.implemented', false);

    if(!implementedProperty) {
      return;
    }

    if(implementedProperty.default == true) {
      status = 'implemented';
    }

    let name = sc.title || implementedProperty.title;

    output.security_controls.push({
      handle: scHandle,
      description: '--',
      status, name
    });
  });

  return output;
}