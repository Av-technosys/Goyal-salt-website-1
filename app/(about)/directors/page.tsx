import DirectorsShowcase from "@/src/component/DirectorsShowcase";

export const metadata = {
  title: "Meet Our Directors & Leadership Team | Goyal Salt Limited",
  description:
    "Meet the Goyal Salt Ltd’s directors who bring experience, integrity and leadership to drive organisational excellence. Understand the leadership values.",
  alternates: {
    canonical: "https://goyalsaltltd.com/directors",
  },
};

export default function BoardOfDirectorsPage() {
  return <DirectorsShowcase />;
}
