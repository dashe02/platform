package org.whut.inspectManagement.business.inspectTable.entity;

import java.util.Date;
/**
 * Created with IntelliJ IDEA.
 * User: xjie
 * Date: 14-5-21
 * Time: 下午9:12
 * To change this template use File | Settings | File Templates.
 */
public class SubInspectItem {
    private long id;
    private String name;
    private String description;
    private Date createtime;
    private String inspectArea;
    private String number;
    private String inspectTable;
    private String isInput;
    private String choiceValue;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getInspectArea() {
        return inspectArea;
    }

    public void setInspectArea(String inspectArea) {
        this.inspectArea = inspectArea;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getInspectTable() {
        return inspectTable;
    }

    public void setInspectTable(String inspectTable) {
        this.inspectTable = inspectTable;
    }

    public String getInput() {
        return isInput;
    }

    public void setInput(String input) {
        isInput = input;
    }

    public String getChoiceValue() {
        return choiceValue;
    }

    public void setChoiceValue(String choiceValue) {
        this.choiceValue = choiceValue;
    }
}
