"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from 'react';

const CreateLobbyForm = () => {
  const [formData, setFormData] = useState({
    lobbyName: '',
    startTime: '',
    endTime: ''
  });

  const [error, setError] = useState('');
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
    
    const formatDateTime = (date: Date) => {
      return date.toLocaleString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: timeZone
      }).replace(', ', 'T');
    };

    setFormData(prev => ({
      ...prev,
      startTime: formatDateTime(now),
      endTime: formatDateTime(oneHourLater)
    }));
  }, [timeZone]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lobbyName || !formData.startTime || !formData.endTime) {
      setError('All inputs are required.');
      return;
    }
    setError('');
  };

  const handleClear = () => {
    setFormData({
      lobbyName: '',
      startTime: '',
      endTime: ''
    });
    setError('');
  };

  return (
    <Card className="w-full max-w-4xl p-4 pt-7">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <label htmlFor="lobbyName" className="text-base font-bold w-28">
              Lobby Name
            </label>
            <Input
              id="lobbyName"
              placeholder="e.g. TEC3 Qualifier Lobby T05 "
              value={formData.lobbyName}
              onChange={(e) => setFormData({ ...formData, lobbyName: e.target.value })}
              className="text-base"
            />
          </div>

          <div className="flex gap-x-10">
            <div className="flex items-center gap-4">
              <div className="w-28">
                <label htmlFor="startTime" className="text-base font-bold block">
                  Start Time
                </label>
                <span className="text-xs text-gray-500">
                  ({timeZone})
                </span>
              </div>
              <Input
                id="startTime"
                type="datetime-local"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                className="[&::-webkit-datetime-edit]:text-right [&::-webkit-calendar-picker-indicator]:order-first [&::-webkit-datetime-edit-fields-wrapper]:px-2"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="w-28">
                <label htmlFor="endTime" className="text-base font-bold block">
                  End Time
                </label>
                <span className="text-xs text-gray-500">
                  ({timeZone})
                </span>
              </div>
              <Input
                id="endTime"
                type="datetime-local"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                className="[&::-webkit-datetime-edit]:text-right [&::-webkit-calendar-picker-indicator]:order-first [&::-webkit-datetime-edit-fields-wrapper]:px-2"
              />
            </div>
          </div>

          <div className="flex h-4 items-center">
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="bg-primary-color">
              Add
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateLobbyForm;
