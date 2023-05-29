'use client';

import { useState } from "react";
import {
  Layout,
  Menu,
  theme,
  Typography,
  Button,
  Card,
  Form,
  Input,
  Radio,
} from "antd";

export default function Home() {
  const { Header, Content, Footer, Sider } = Layout;
  const { Title } = Typography;
  const rawItems = [
    {
      name: "Investment",
      children: [
        { name: "Interest" },
        { name: "Investment" },
        { name: "Finance" },
        { name: "Compound Interest" },
        { name: "Interest Rate" },
        { name: "Savings" },
        { name: "Simple Interest" },
        { name: "CD" },
        { name: "Average Return" },
        { name: "ROI" },
        { name: "Payback Period" },
        { name: "Present Value" },
        { name: "Future Value" },
      ],
    },
    {
      name: "Real Estate",
      children: [
        { name: "Mortgage" },
        { name: "Amortization" },
        { name: "Mortgage Payoff" },
        { name: "House Affordability" },
        { name: "Rent" },
        { name: "Debt-to-Income Ratio" },
        { name: "Real Estate" },
        { name: "Refinance" },
        { name: "Rental Property" },
        { name: "APR" },
        { name: "FHA" },
        { name: "VA" },
        { name: "Down Payment" },
        { name: "Rent vs. Buy" },
      ],
    },
    {
      name: "Fitness",
      children: [
        { name: "BMI" },
        { name: "Calorie" },
        { name: "Body Fat" },
        { name: "BMR" },
        { name: "Ideal Weight" },
        { name: "Pace" },
        { name: "Army Body Fat" },
        { name: "Lean Body Mass" },
        { name: "Healthy Weight" },
        { name: "Calories Burned" },
      ],
    },
    {
      name: "Health",
      children: [
        { name: "Macro" },
        { name: "Carbohydrate" },
        { name: "Protein" },
        { name: "Fat Intake" },
        { name: "TDEE" },
        { name: "GFR" },
        { name: "Body Type" },
        { name: "Body Surface Area" },
        { name: "BAC" },
      ],
    },
  ];
  const rawItems2 = [];
  var lastKey = 0;
  const items = rawItems.map((item, i) => {
    lastKey += 1;
    const x = {
      key: lastKey,
      label: item.name,
    };
    rawItems2.push(item.name);
    var children = item.children.map((itemChild, j) => {
      lastKey += 1;
      rawItems2.push(itemChild.name);
      return {
        key: lastKey,
        label: itemChild.name,
      };
    });
    x.children = children;
    return x;
  });
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [openKeys, setOpenKeys] = useState();
  const [selectedKeys, setSelectedKeys] = useState();
  const [title, setTitle] = useState("NexusCalc — A Master Calculator");
  const [form] = Form.useForm();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        width={240}
      >
        <img
          src={"https://svgshare.com/i/taW.svg"}
          className="pointer-onHover"
          style={{
            margin: 28,
            marginBottom: 14,
            width: 140,
          }}
          onClick={() => {
            setTitle("NexusCalc — A Master Calculator");
            setOpenKeys([]);
            setSelectedKeys([]);
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          items={items}
          onOpenChange={(keys) => setOpenKeys([keys[keys.length - 1]])}
          onSelect={(item) => {
            setTitle(`${rawItems2[item.key - 1]} Calculator`);
            setSelectedKeys(item.key);
          }}
        />
      </Sider>
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "between",
          minHeight: "100vh",
          background: "white",
          marginLeft: 240,
        }}
      >
        <Content
          style={{
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              background: "white",
            }}
          >
            <Title level={2}>{title}</Title>
            {selectedKeys == ["2"] && (
              <Card
                style={{
                  width: 400,
                  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
                }}
              >
                <Form
                  labelCol={{ span: 10 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  form={form}
                  style={{ maxWidth: 400, marginTop: 12 }}
                >
                  <Form.Item
                    style={{ marginBottom: 12 }}
                    label="Initial Investment"
                  >
                    <Input prefix="$" />
                  </Form.Item>

                  <Form.Item
                    style={{ marginBottom: 12 }}
                    label="Annual Contribution"
                  >
                    <Input prefix="$" />
                  </Form.Item>

                  <Form.Item
                    style={{ marginBottom: 12 }}
                    label="Monthly Contribution"
                  >
                    <Input prefix="$" />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 12 }} label="Interest Rate">
                    <Input suffix="%" />
                  </Form.Item>

                  <Form.Item
                    style={{ marginBottom: 12 }}
                    label="Investment Length"
                  >
                    <Input
                      suffix="Y"
                      style={{
                        width: "calc(50% - 4px)",
                      }}
                    />
                    <Input
                      suffix="M"
                      style={{
                        width: "calc(50% - 4px)",
                        marginLeft: 8,
                      }}
                    />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 12 }} label="Tax Rate">
                    <Input suffix="%" />
                  </Form.Item>
                  <Form.Item
                    style={{ marginBottom: 12 }}
                    label="Inflation Rate"
                  >
                    <Input suffix="%" />
                  </Form.Item>

                  <Form.Item
                    style={{ marginTop: 24 }}
                    wrapperCol={{ offset: 10 }}
                  >
                    <Button type="primary">Calculate</Button>
                  </Form.Item>
                </Form>
              </Card>
            )}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            paddingTop: 12,
            paddingBottom: 12,
            background: "#000A17",
            color: "#D0D0D2",
          }}
        >
          Aditya Kulshrestha © 2023
        </Footer>
      </Layout>
    </Layout>
  );
}
