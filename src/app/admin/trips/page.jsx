import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Eye } from "lucide-react";

const TripCard = ({ status }) => {
    const statusBadge = {
        completed: <Badge className="bg-green-100 text-green-600">completed</Badge>,
        ongoing: <Badge className="bg-blue-100 text-blue-600">ongoing</Badge>,
        upcoming: <Badge className="bg-yellow-100 text-yellow-600">upcoming</Badge>
    };

    return (
        <Card className="mb-4">
            <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="text-sm font-medium">
                        Mumbai, Maharashtra → Pune, Maharashtra
                        <div className="text-xs text-gray-500">Delivery</div>
                    </div>
                    {statusBadge[status]}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <div><strong>Vehicle:</strong> MH-12-AB-3456</div>
                    <div><strong>Driver:</strong> John Doe</div>
                    <div><strong>Client:</strong> ABC Corporation</div>
                    <div><strong>Fuel Used:</strong> 15.5 liters</div>
                    <div><strong>Distance:</strong> 180 km</div>
                </div>
                <div className="text-right">
                    <Button variant="outline" className="text-sm flex items-center gap-1">
                        <Eye className="w-4 h-4" /> View
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const Dashboard = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">All Trips</h2>
            <p className="text-sm text-gray-500 mb-4">Monitor and manage fleet trips and routes</p>
            <div className="flex items-center gap-2 mb-6">
                <Input placeholder="search client......." className="max-w-sm" />
                <Button variant="outline" className="flex items-center gap-1">
                    <Filter className="w-4 h-4" />
                </Button>
                <select className="border rounded-md p-2 text-sm">
                    <option>All Status</option>
                    <option>Completed</option>
                    <option>Ongoing</option>
                    <option>Upcoming</option>
                </select>
            </div>
            <TripCard status="completed" />
            <TripCard status="ongoing" />
            <TripCard status="upcoming" />
        </div>
    );
};

export default Dashboard;