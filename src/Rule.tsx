import arrayFind from 'array-find';
import React from 'react';
import { RuleProps } from './types';

export const Rule: React.FC<RuleProps> = ({
  id,
  parentId,
  field,
  operator,
  parentOperator,
  value,
  translations,
  schema: {
    classNames,
    controls,
    fields,
    getInputType,
    getPlaceHolder,
    getLevel,
    getOperators,
    getValueEditorType,
    getValues,
    onPropChange,
    onRuleRemove,
    removeIconatStart
  }
}) => {
  const onElementChanged = (property: string, value: any) =>  onPropChange(property, value, id);
  const onFieldChanged = (value: any) =>   onElementChanged('field', value);
  const onOperatorChanged = (value: any) =>  onElementChanged('operator', value);
  const onParentOperatorChanged = (value: any) =>  onElementChanged('parentOperator', value);
  const onValueChanged = (value: any) => onElementChanged('value', value);
  const removeRule = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    onRuleRemove(id, parentId);
  };
  const fieldData = arrayFind(fields, (f) => f.name === field);
  const level = getLevel(id);
  const parentOpertators = getOperators(field, true);
  const getOperatorsList = (field) => getOperators(field,false, parentOperator);
  const enableParentOperaton = !!(parentOpertators && parentOpertators.length) ;
  return (
    <div className={`rule ${classNames.rule}`} data-rule-id={id} data-level={level}>
     {removeIconatStart && <controls.removeRuleAction
        label={translations.removeRule.label}
        title={translations.removeRule.title}
        className={`rule-remove ${classNames.removeRule}`}
        handleOnClick={removeRule}
        level={level}
      />}
      <controls.fieldSelector
        options={fields}
        title={translations.fields.title}
        value={field}
        operator={operator}
        placeHolderTooltip={true}
        className={`rule-fields ${classNames.fields}`}
        handleOnChange={onFieldChanged}
        level={level}
      />
    {enableParentOperaton && <controls.parentOperatorSelector
        field={field}
        fieldData={fieldData}
        title={translations.operators.title}
        placeHolderTooltip={true}
        options={parentOpertators}
        value={parentOperator}
        className={`rule-operators ${classNames.operators}`}
        handleOnChange={onParentOperatorChanged}
        level={level}
      />}
      {!enableParentOperaton && <controls.operatorSelector
        field={field}
        fieldData={fieldData}
        title={translations.operators.title}
        placeHolderTooltip={true}
        options={getOperatorsList(field)}
        value={operator}
        className={`rule-operators ${classNames.operators}`}
        handleOnChange={onOperatorChanged}
        level={level}
      />}
      <controls.valueEditor
        field={field}
        fieldData={fieldData}
        title={translations.value.title}
        operator={operator}
        value={value}
        type={getValueEditorType(field, operator)}
        inputType={getInputType(field, operator)}
        placeHolder={getPlaceHolder(field, operator)}
        values={getValues(field, operator)}
        className={`rule-value ${classNames.value}`}
        handleOnChange={onValueChanged}
        level={level}
      />
        {enableParentOperaton && <controls.operatorSelector
        field={field}
        fieldData={fieldData}
        title={translations.operators.title}
        placeHolderTooltip={true}
        options={getOperatorsList(field)}
        value={operator}
        className={`rule-operators ${classNames.operators}`}
        handleOnChange={onOperatorChanged}
        level={level}
      />}
      {!removeIconatStart && <controls.removeRuleAction
        label={translations.removeRule.label}
        title={translations.removeRule.title}
        className={`rule-remove ${classNames.removeRule}`}
        handleOnClick={removeRule}
        level={level}
      />}
    </div>
  );
};

Rule.displayName = 'Rule';
