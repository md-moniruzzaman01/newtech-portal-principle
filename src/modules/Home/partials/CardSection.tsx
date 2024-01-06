import Card from "@components/Card";

export function CardsSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-primary mx-auto px-4">
      <Card className="bg-primary" href="/complaints/pending">
        <div>
          <h2>Pending</h2>
          <p className="text-center mt-6">100</p>
        </div>
      </Card>
      <Card className="bg-[#F39C12]" href="/complaints/progress">
        <div>
          <h2>In Progress</h2>
          <p className="  mt-6">100</p>
        </div>
      </Card>
      <Card className="bg-[#00A65A]" href="/complaints/delivery">
        <div>
          <h2>Delivery</h2>
          <p className="  mt-6">100</p>
        </div>
      </Card>
      <Card className="bg-[#DD4B39]" href="/complaints/buffer">
        <div>
          <h2>Buffer</h2>
          <p className=" mt-6">100</p>
        </div>
      </Card>
    </div>
  );
}
